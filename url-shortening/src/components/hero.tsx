import ilustration from '../assets/illustration-working.svg';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-10">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-4">More than just shorter links</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-[45ch]">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-[#2acfcf] hover:bg-[#2acfcf]/60 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>
      <div className="">
        <img src={ilustration} alt="Hero Image" className='ml-auto' />
      </div>
    </div>
  );
};

export default Hero;
