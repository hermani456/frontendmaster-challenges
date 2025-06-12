import bgBoostDesktop from "../assets/bg-boost-desktop.svg";
import bgBoostMobile from "../assets/bg-boost-mobile.svg";

const Cta = () => {
  return (
    <div className="bg-[#3b3054] bg-no-repeat bg-cover relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full hidden sm:block">
        <img
          src={bgBoostDesktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full sm:hidden">
        <img
          src={bgBoostMobile}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Boost your links today
        </h2>
        <button className="bg-[#2acfcf] hover:bg-[#2acfcf]/80 text-white px-10 py-3 rounded-full font-bold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cta;
