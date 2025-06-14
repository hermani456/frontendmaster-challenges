const UrlShortener = () => {
  // https://corsproxy.io/?url=https://example.com
  // https://cleanuri.com/api/v1/shorten

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get("url") as string;
    console.log("Shortening URL:", url);

    try {
      const response = await fetch("https://corsproxy.io/?url=https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div className="bg-[#3b3054] p-6 sm:p-10 rounded-lg bg-no-repeat bg-cover bg-[url('/src/assets/bg-shorten-mobile.svg')] sm:bg-[url('/src/assets/bg-shorten-desktop.svg')]">
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full p-3 bg-white rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-[#2acfcf] hover:bg-[#2acfcf]/80 text-white py-3 px-8 rounded-lg font-bold"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};

export default UrlShortener;
