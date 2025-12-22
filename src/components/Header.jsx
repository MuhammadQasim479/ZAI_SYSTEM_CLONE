import React, { useEffect, useState } from "react";
import { header } from "../Data/Mockdata";
import ziasystem from "../assets/images/ziasystem.webp";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();

  const forceWhiteBg = ["/impulsehcm360", "/services", "/contactus"].includes(
    location.pathname
  );
  console.log("pathname", location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = forceWhiteBg || isScroll;
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`w-full mx-auto px-6 md:px-20 h-20 flex items-center justify-between transition-colors duration-700 ${
          showWhiteBg ? "bg-[#F5F8FA]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <img src={ziasystem} alt="logo" className="w-12" />
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          {header.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={`text-base font-medium ${
                showWhiteBg
                  ? "text-gray-500 hover:text-gray-600"
                  : "text-[#e6e6e6ae] hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {/* hamburger (mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 bg-[#D8D8D8] rounded-full transition-all duration-300 ${
              showWhiteBg ? " text-gray-800" : ""
            }`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-[#fff] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "white" }}
      >
        <div className="flex items-center justify-between px-3 py-3">
          <img src={ziasystem} alt="logo" className="w-12" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-gray-200"
          >
            <X className="text-gray-700" />
          </button>
        </div>

        <div className="pt-6 px-6 space-y-4">
          {header.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="block text-gray-600 text-base font-medium py-1.5 border-b border-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
