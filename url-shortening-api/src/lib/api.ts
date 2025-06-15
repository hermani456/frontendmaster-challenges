interface ShortenUrlResponse {
  originalUrl: string;
  shortenedUrl: string;
}

interface ApiError extends Error {
  statusCode?: number;
}

export async function shortenUrl(url: string): Promise<ShortenUrlResponse> {
  try {
    const response = await fetch("/api/urlShortener", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.error || "Failed to shorten URL") as ApiError;
      error.statusCode = response.status;
      throw error;
    }

    return data as ShortenUrlResponse;
  } catch (error) {
    if (!(error instanceof Error)) {
      throw new Error("An unknown error occurred");
    }

    const apiError = error as ApiError;

    if (!apiError.statusCode) {
      apiError.message = `Network error: ${apiError.message}`;
    }

    throw apiError;
  }
}

export function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}
