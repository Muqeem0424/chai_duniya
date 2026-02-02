import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7A4A2E] text-[#FFF7ED] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Chai Duniya. All Rights Reserved.</p>
        <div className="text-center md:text-right">
          <p>Address: 123 Chai Street, Tea City</p>
          <p>Email: info@chaiduniya.com | Phone: +91 9876543210</p>
        </div>
        <div className="flex space-x-4 text-xl mt-4 md:mt-0">
          <a href="#" className="hover:text-[#B08968] transition">🌐</a>
          <a href="#" className="hover:text-[#B08968] transition">📘</a>
          <a href="#" className="hover:text-[#B08968] transition">📸</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
