import ilustration from '@/public/illustration-working.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center py-12">
          <div className="md:w-1/2 mt-10 md:mt-0 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center md:text-left text-gray-800">
              More than just shorter links
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-[45ch] text-center md:text-left">
              Build your brand&apos;s recognition and get detailed insights on how your links are performing.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#2acfcf] hover:bg-[#2acfcf]/80 text-white px-10 py-3 rounded-full font-bold transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-end">
            <div className="relative w-[28rem] md:w-full translate-x-16 md:translate-x-24 lg:translate-x-36">
              <Image 
                src={ilustration} 
                alt="Hero illustration of person working" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
