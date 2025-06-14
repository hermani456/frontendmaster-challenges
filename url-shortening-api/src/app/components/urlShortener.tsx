const UrlShortener = () => {
  return (
    <div className="bg-[#3b3054] p-6 sm:p-10 rounded-lg bg-no-repeat bg-cover bg-[url('@/public/bg-shorten-mobile.svg')] sm:bg-[url('@/public/bg-shorten-desktop.svg')]">
      <form className="flex flex-col sm:flex-row gap-4">
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
