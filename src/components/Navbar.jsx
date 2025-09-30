
import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
  }`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">KAG Church</span>
              <span className="text-xs text-blue-600">Dagoretti</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("ministries")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Ministries
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("sermons")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Sermons
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition transform hover:scale-105"
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("ministries")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Ministries
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("sermons")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Sermons
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="block w-full text-left px-4 py-2 bg-red-600 text-white rounded font-semibold"
            >
              Donate
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

