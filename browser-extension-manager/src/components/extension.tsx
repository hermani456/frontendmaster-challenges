interface ExtensionProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggleActive: () => void;
  onRemove: () => void;
}

const Extension = ({
  logo,
  name,
  description,
  isActive,
  onToggleActive,
  onRemove,
}: ExtensionProps) => {
  return (
    <div className="bg-white dark:bg-[#212636] p-5 items-start rounded-xl max-w-[24rem] border dark:border-[#545969] border-[#d6e2f5] shadow-lg">
      <div className="flex items-start">
        <img src={logo} className="w-14" alt="DevLens" />
        <div className="ml-3 h-[5rem]">
          <h2 className="dark:text-white text-[#09153e] text-lg font-bold">
            {name}
          </h2>
          <span className="dark:text-[#c7c7c7] text-[#2f364b]">
            {description}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onRemove}
          className="border dark:border-[#545969] border-[#d6e2f5] dark:text-white text-[#09153e] font-semibold py-2 px-4 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          Remove
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={onToggleActive}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#f25c54] dark:peer-checked:bg-[#f25c54]"></div>
        </label>
      </div>
    </div>
  );
};

export default Extension;
