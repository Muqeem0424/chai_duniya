import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to scroll smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFF7ED]/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#7A4A2E] cursor-pointer" onClick={() => scrollToSection("home")}>
          ☕ Chai Duniya
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#4B3A2F] font-medium">
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("menu")}>Menu</li>
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden text-2xl text-[#4B3A2F]" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-[#FFF7ED] w-full px-6 pb-4 space-y-4 text-[#4B3A2F] font-medium shadow-md">
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("menu")}>Menu</li>
          <li className="hover:text-[#B08968] transition cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
