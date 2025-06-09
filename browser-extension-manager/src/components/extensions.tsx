import Extension from "./extension";
import { extensions as initialExtensions } from "../data/extensions";
import { useState } from "react";

interface ExtensionType {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

const Extentions = () => {
  type filterType = "All" | "Active" | "Inactive";
  const [filter, setFilter] = useState<filterType>("All");
  const [extensionsList, setExtensionsList] =
    useState<ExtensionType[]>(initialExtensions);

  const handleToggleActive = (name: string) => {
    setExtensionsList((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemoveExtension = (name: string) => {
    setExtensionsList((prevExtensions) =>
      prevExtensions.filter((ext) => ext.name !== name)
    );
  };

  const filteredExtensions = extensionsList.filter((extension) => {
    if (filter === "All") return true;
    if (filter === "Active") return extension.isActive;
    if (filter === "Inactive") return !extension.isActive;
    return false;
  });
  
  return (
    <section className="max-w-screen-xl mx-auto p-5 ">
      <div className="text-white flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between">
        <h1 className="text-3xl font-bold dark:text-white text-[#09153e]">
          Extentions List
        </h1>
        <div className="space-x-2 font-semibold">
          <button
            onClick={() => setFilter("All")}
            className={`dark:bg-[#2f364b] text-[#09153e] border border-[#c7c7c7] dark:border-[#545969] px-5 py-2 rounded-full cursor-pointer ${
              filter === "All"
                ? "bg-[#f25c54] text-white dark:bg-[#f25c54] dark:text-[#09153e]"
                : "dark:text-white bg-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Active")}
            className={`dark:bg-[#2f364b] text-[#09153e] border border-[#c7c7c7] dark:border-[#545969] px-5 py-2 rounded-full cursor-pointer ${
              filter === "Active"
                ? "bg-[#f25c54] text-white dark:bg-[#f25c54] dark:text-[#09153e]"
                : "dark:text-white bg-white"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Inactive")}
            className={`dark:bg-[#2f364b] text-[#09153e] border border-[#c7c7c7] dark:border-[#545969] px-5 py-2 rounded-full cursor-pointer ${
              filter === "Inactive"
                ? "bg-[#f25c54] text-white dark:bg-[#f25c54] dark:text-[#09153e]"
                : "dark:text-white bg-white"
            }`}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-5">
        {filteredExtensions.map((extension) => (
          <Extension
            key={extension.name}
            {...extension}
            onToggleActive={() => handleToggleActive(extension.name)}
            onRemove={() => handleRemoveExtension(extension.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default Extentions;
