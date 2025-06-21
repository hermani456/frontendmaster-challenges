import heroImage from "../assets/image-hero-desktop.png";
import heroImageMobile from "../assets/image-hero-mobile.png";
import audio from "../assets/client-audiophile.svg";
import databiz from "../assets/client-databiz.svg";
import maker from "../assets/client-maker.svg";
import meet from "../assets/client-meet.svg";

const Hero = () => {
  return (
    <main className="container mx-auto py-8 lg:px-16 lg:py-16">
      <section className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-16">
        {/* left content */}
        <div className="flex-1 max-w-xl space-y-8 lg:space-y-12 mx-auto text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 ">
            Make remote work
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <div className="pt-4">
            <button className="bg-gray-900 text-white font-semibold cursor-pointer px-6 py-3 rounded-2xl hover:bg-white hover:text-gray-900 border-2 border-gray-900 transition-colors duration-200">
              Learn more
            </button>
          </div>

          <div className="pt-8 lg:pt-16">
            <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8">
              <img
                src={databiz}
                alt="Databiz"
                className="h-4 lg:h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={audio}
                alt="Audiophile"
                className="h-4 lg:h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={meet}
                alt="Meet"
                className="h-4 lg:h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={maker}
                alt="Maker"
                className="h-4 lg:h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* right image */}
        <div className="flex-1 max-w-md lg:max-w-lg mx-auto lg:mx-0">
          <img
            src={heroImage}
            alt="Hero"
            className="hidden lg:block w-full h-auto"
          />

          <img
            src={heroImageMobile}
            alt="Hero"
            className="lg:hidden w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
