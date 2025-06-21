"use client";
import logo from "../assets/logo.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close-menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
  };
  return (
    <>
      <nav className="hidden lg:flex items-center gap-10 py-6 px-4">
        <img src={logo} alt="Logo" />
        <ul className="flex items-center gap-6 text-lg">
          <li className="relative group">
            <button className="cursor-pointer hover:font-semibold text-gray-500 hover:text-black">
              <span>Features</span>
              <span className="ml-1">
                <ChevronDown className="inline size-4 group-hover:hidden" />
                <ChevronUp className="hidden size-4 group-hover:inline" />
              </span>
            </button>
            <div className="absolute right-0 hidden w-40 py-4 bg-white rounded-xl text-black shadow-lg group-hover:flex group-hover:justify-center">
              <ul>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  <img src={todo} alt="Todo Icon" />
                  Todo List
                </li>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  <img src={calendar} alt="Calendar Icon" />
                  Calendar
                </li>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  <img src={reminders} alt="Reminders Icon" />
                  Reminders
                </li>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  <img src={planning} alt="Planning Icon" />
                  Planning
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <button className="cursor-pointer hover:font-semibold text-gray-500 hover:text-black">
              Company
              <span className="ml-1">
                <ChevronDown className="inline size-4 group-hover:hidden" />
                <ChevronUp className="hidden size-4 group-hover:inline" />
              </span>
            </button>
            <div className="absolute right-0 hidden w-40 py-4 bg-white rounded-xl text-black shadow-lg group-hover:flex group-hover:justify-center">
              <ul>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  History
                </li>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  Our Team
                </li>
                <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:font-semibold cursor-pointer text-gray-500 hover:text-black">
            <button>Careers</button>
          </li>
          <li className="hover:font-semibold cursor-pointer text-gray-500 hover:text-black">
            <button>About</button>
          </li>
        </ul>
        <div className="ml-auto">
          <button className="py-2 px-4 rounded-lg text-gray-500 font-semibold hover:text-black cursor-pointer">
            Login
          </button>
          <button className="ml-4 py-2 px-4 border-2 rounded-xl text-gray-500 border-gray-500 font-semibold hover:border-black hover:text-black cursor-pointer">
            Register
          </button>
        </div>
      </nav>
      {/* mobile navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 py-6">
        <img src={logo} alt="Logo" />
        <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
          <img src={menuIcon} alt="Menu" className="size-6" />
        </button>
      </div>

      {/* mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* background overlay */}
          <div className="fixed inset-0 bg-black/20" onClick={toggleMenu}></div>

          {/* menu panel */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg">
            {/* menu header */}
            <div className="flex justify-end p-6">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-black"
              >
                <img src={closeIcon} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* menu content */}
            <div className="px-6 pb-6">
              <ul className="space-y-4">
                {/* features dropdown */}
                <li>
                  <button
                    onClick={toggleFeatures}
                    className="flex items-center justify-between w-full text-left text-gray-500 hover:text-black"
                  >
                    <span>Features</span>
                    {featuresOpen ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </button>
                  {featuresOpen && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                        <img src={todo} alt="Todo" className="size-4" />
                        Todo List
                      </li>
                      <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                        <img src={calendar} alt="Calendar" className="size-4" />
                        Calendar
                      </li>
                      <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                        <img
                          src={reminders}
                          alt="Reminders"
                          className="size-4"
                        />
                        Reminders
                      </li>
                      <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                        <img src={planning} alt="Planning" className="size-4" />
                        Planning
                      </li>
                    </ul>
                  )}
                </li>

                {/* company dropdown */}
                <li>
                  <button
                    onClick={toggleCompany}
                    className="flex items-center justify-between w-full text-left text-gray-500 hover:text-black"
                  >
                    <span>Company</span>
                    {companyOpen ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </button>
                  {companyOpen && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li className="text-gray-500 hover:text-black cursor-pointer">
                        History
                      </li>
                      <li className="text-gray-500 hover:text-black cursor-pointer">
                        Our Team
                      </li>
                      <li className="text-gray-500 hover:text-black cursor-pointer">
                        Blog
                      </li>
                    </ul>
                  )}
                </li>

                {/* other menu items */}
                <li>
                  <a href="#" className="text-gray-500 hover:text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-black">
                    About
                  </a>
                </li>
              </ul>

              {/* login/register buttons */}
              <div className="mt-8 space-y-4">
                <button className="w-full text-center py-3 text-gray-500 hover:text-black">
                  Login
                </button>
                <button className="w-full py-3 border-2 border-gray-500 rounded-xl text-gray-500 hover:border-black hover:text-black">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
