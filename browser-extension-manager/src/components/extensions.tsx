const Extentions = () => {
  return (
    <section className="text-white max-w-screen-xl mx-auto p-5 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between">
      <h1 className="text-3xl font-bold">Extentions List</h1>
      <div className="space-x-2">
        <button className="bg-[#f25c54] px-5 py-2 rounded-full cursor-pointer">
          All
        </button>
        <button className="bg-[#545969] border border-[#c7c7c7] px-5 py-2 rounded-full cursor-pointer">
          Active
        </button>
        <button className="bg-[#545969] border border-[#c7c7c7] px-5 py-2 rounded-full cursor-pointer">
          Inactive
        </button>
      </div>
    </section>
  );
};

export default Extentions;
