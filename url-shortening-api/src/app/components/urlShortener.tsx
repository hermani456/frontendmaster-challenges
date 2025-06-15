"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { shortenUrl, isValidUrl } from "../../lib/api";

interface ShortenedUrl {
  originalUrl: string;
  shortenedUrl: string;
}

const LOCAL_STORAGE_KEY = "shortened_urls";

const UrlShortener = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedUrls = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedUrls) {
        setUrls(JSON.parse(savedUrls));
      }
    } catch (err) {
      console.error("Error loading saved URLs:", err);
    }
  }, []);

  useEffect(() => {
    try {
      if (urls.length > 0) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(urls));
      }
    } catch (err) {
      console.error("Error saving URLs:", err);
    }
  }, [urls]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError(null);
    setInputError(null);

    const urlInput = inputRef.current?.value?.trim() || "";

    if (!urlInput) {
      setInputError("Please add a link");
      return;
    }

    if (!isValidUrl(urlInput)) {
      setInputError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    setIsLoading(true);

    try {
      const result = await shortenUrl(urlInput);

      setUrls((prevUrls) => [result, ...prevUrls]);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);

      setCopiedUrl(url);

      setTimeout(() => {
        setCopiedUrl(null);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const deleteUrl = (index: number) => {
    setUrls((prevUrls) => {
      const newUrls = [...prevUrls];
      newUrls.splice(index, 1);

      if (newUrls.length > 0) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUrls));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }

      return newUrls;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-5 relative -top-20 sm:-top-16">
      <div className="bg-[#3b3054] p-6 sm:p-10 rounded-lg bg-no-repeat bg-cover bg-[url('/bg-shorten-mobile.svg')] sm:bg-[url('/bg-shorten-desktop.svg')]">
        <form
          className="flex flex-col sm:flex-row gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex-1">
            <input
              ref={inputRef}
              type="url"
              placeholder="Shorten a link here..."
              className={`w-full p-3 bg-white rounded-lg ${
                inputError ? "border-2 border-red-500 placeholder-red-500" : ""
              }`}
              disabled={isLoading}
              aria-invalid={!!inputError}
              aria-describedby={inputError ? "url-error" : undefined}
            />
            {inputError && (
              <p id="url-error" className="text-red-500 text-sm mt-1 italic">
                {inputError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`bg-[#2acfcf] hover:bg-[#2acfcf]/80 text-white py-3 px-8 rounded-lg font-bold transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
      </div>

      {error && (
        <div
          className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg"
          role="alert"
        >
          {error}
        </div>
      )}

      {urls.length > 0 && (
        <div className="mt-6 space-y-4">
          {urls.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="truncate text-gray-700 border-b sm:border-b-0 pb-3 sm:pb-0">
                {item.originalUrl}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-3 sm:pt-0">
                <span className="text-[#2acfcf] font-medium">
                  {item.shortenedUrl}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(item.shortenedUrl)}
                    className={`py-1 px-4 rounded-lg text-sm font-medium transition-colors ${
                      copiedUrl === item.shortenedUrl
                        ? "bg-[#3b3054] text-white"
                        : "bg-[#2acfcf] hover:bg-[#2acfcf]/80 text-white"
                    }`}
                    aria-label={
                      copiedUrl === item.shortenedUrl
                        ? "Copied to clipboard"
                        : "Copy to clipboard"
                    }
                  >
                    {copiedUrl === item.shortenedUrl ? "Copied!" : "Copy"}
                  </button>
                  <button
                    onClick={() => deleteUrl(index)}
                    className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                    aria-label="Delete shortened URL"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {urls.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setUrls([]);
                  localStorage.removeItem(LOCAL_STORAGE_KEY);
                }}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
