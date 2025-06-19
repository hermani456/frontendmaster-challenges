"use client";
import logo from "../assets/logo.svg";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="hidden lg:flex items-center gap-10 py-6 px-4">
        <img src={logo} alt="Logo" />
        <menu className="flex items-center gap-6 text-lg">
          <div className="relative group">
            <li className="cursor-pointer hover:font-semibold text-gray-500 hover:text-black">
              <span>Features</span>
              <span className="ml-1">
                <ChevronDown className="inline size-4 group-hover:hidden" />
                <ChevronUp className="hidden size-4 group-hover:inline" />
              </span>
            </li>
            <div className="absolute right-0 hidden w-40 py-4 bg-white rounded-xl text-black shadow-lg group-hover:flex group-hover:justify-center">
              <ul>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    <img src={todo} alt="Todo Icon" />
                    Todo List
                  </li>
                </div>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    <img src={calendar} alt="Calendar Icon" />
                    Calendar
                  </li>
                </div>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    <img src={reminders} alt="Reminders Icon" />
                    Reminders
                  </li>
                </div>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    <img src={planning} alt="Planning Icon" />
                    Planning
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <li className="cursor-pointer hover:font-semibold text-gray-500 hover:text-black">
              Company
              <span className="ml-1">
                <ChevronDown className="inline size-4 group-hover:hidden" />
                <ChevronUp className="hidden size-4 group-hover:inline" />
              </span>
            </li>
            <div className="absolute right-0 hidden w-40 py-4 bg-white rounded-xl text-black shadow-lg group-hover:flex group-hover:justify-center">
              <ul>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    History
                  </li>
                </div>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Our Team
                  </li>
                </div>
                <div>
                  <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Blog
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <li className="hover:font-semibold cursor-pointer text-gray-500 hover:text-black">
            Careers
          </li>
          <li className="hover:font-semibold cursor-pointer text-gray-500 hover:text-black">
            About
          </li>
        </menu>
        <div className="ml-auto">
          <button className="py-2 px-4 rounded-lg text-gray-500 font-semibold hover:text-black cursor-pointer">
            Login
          </button>
          <button className="ml-4 py-2 px-4 border-2 rounded-xl text-gray-500 border-gray-500 font-semibold hover:border-black hover:text-black cursor-pointer">
            Register
          </button>
        </div>
      </nav>
      {/* here i'm trying to make a mobile menu to the right */}
      <div className="lg:hidden flex items-center justify-between px-4 py-6">
        <button className="text-gray-500 hover:text-black">
          <img src={logo} alt="" />
        </button>
        <button className="text-gray-500 hover:text-black">
          <MenuIcon className="size-8" onClick={toggleMenu} />
        </button>
      </div>
    {isOpen && (
      <div className="absolute right-0 w-48 h-full bg-red-200 rounded-lg shadow-lg">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
        </ul>
      </div>
    )}
    </>
  );
};

export default Navbar;
