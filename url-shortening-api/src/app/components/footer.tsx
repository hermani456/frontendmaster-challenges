import logo from "@/public/logo.svg";
import iconFacebook from "@/public/icon-facebook.svg";
import iconTwitter from "@/public//icon-twitter.svg";
import iconPinterest from "@/public//icon-pinterest.svg";
import iconInstagram from "@/public//icon-instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232127] py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="flex justify-center md:justify-start h-[2rem] col-span-1 lg:col-span-2">
            <Image src={logo} alt="Shortly" className="brightness-0 invert" />
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold mb-4">Features</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2acfcf] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src={iconTwitter} alt="Twitter" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src={iconPinterest} alt="Pinterest" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src={iconInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
