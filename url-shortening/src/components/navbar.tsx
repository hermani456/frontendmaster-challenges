import { useState } from "react";
import shortlyLogo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mt-10 flex items-center gap-5 relative px-6 md:px-0">
      <img src={shortlyLogo} alt="Shortly logo" />

      <div className="hidden md:block ml-10">
        <ul className="flex items-center gap-6 text-[#9e9aa7] font-semibold">
          <li className="hover:text-black transition-colors cursor-pointer">
            Features
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Resources
          </li>
        </ul>
      </div>

      <div className="hidden md:flex ml-auto items-center gap-4">
        <button className="text-[#9e9aa7] hover:text-gray-900 font-semibold cursor-pointer">
          Login
        </button>
        <button className="bg-[#2acfcf] hover:bg-[#2acfcf]/60 text-white px-4 py-2 rounded-full cursor-pointer transition-colors font-semibold">
          Sign Up
        </button>
      </div>

      <button
        className="ml-auto md:hidden"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="toggle navigation menu"
      >
        <div className={`relative w-6 h-5 ${isMenuOpen ? "transform" : ""}`}>
          <span
            className={`absolute h-0.5 w-full bg-[#9e9aa7] transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-full bg-[#9e9aa7] top-2 transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-full bg-[#9e9aa7] transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
            }`}
          ></span>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#3b3054] rounded-lg p-6 mx-6 z-50">
          <ul className="flex flex-col items-center gap-6 text-white font-bold pb-6 border-b border-gray-600">
            <li className="hover:text-[#2acfcf] transition-colors cursor-pointer">
              Features
            </li>
            <li className="hover:text-[#2acfcf] transition-colors cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-[#2acfcf] transition-colors cursor-pointer">
              Resources
            </li>
          </ul>
          <div className="flex flex-col items-center gap-4 pt-6">
            <button className="text-white hover:text-[#2acfcf] font-bold cursor-pointer w-full">
              Login
            </button>
            <button className="bg-[#2acfcf] hover:bg-[#2acfcf]/60 text-white py-3 rounded-full cursor-pointer transition-colors font-bold w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
