import brandRecognitionIcon from "../assets/icon-brand-recognition.svg";
import detailedRecordsIcon from "../assets/icon-detailed-records.svg";
import fullyCustomizableIcon from "../assets/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  return (
    <div className="bg-gray-100 pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Advanced Statistics
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-[#2acfcf] -z-10"></div>
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-2 bg-[#2acfcf] -z-10 transform -translate-x-1/2"></div>

          <div className="bg-white rounded-lg p-8 relative">
            <div className="bg-[#3b3054] rounded-full p-5 inline-flex items-center justify-center absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
              <img
                src={brandRecognitionIcon}
                alt="Brand Recognition"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-center md:text-left text-gray-800">
              Brand Recognition
            </h3>
            <p className="text-gray-500 text-center md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 relative mt-12 md:mt-10">
            <div className="bg-[#3b3054] rounded-full p-5 inline-flex items-center justify-center absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
              <img
                src={detailedRecordsIcon}
                alt="Detailed Records"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-center md:text-left text-gray-800">
              Detailed Records
            </h3>
            <p className="text-gray-500 text-center md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 relative mt-12 md:mt-20">
            <div className="bg-[#3b3054] rounded-full p-5 inline-flex items-center justify-center absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
              <img
                src={fullyCustomizableIcon}
                alt="Fully Customizable"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-center md:text-left text-gray-800">
              Fully Customizable
            </h3>
            <p className="text-gray-500 text-center md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
