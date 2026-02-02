import React from "react";
// Import the café visuals image
import cafeVisuals from "../images/our cafe visuals.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#E6D3C8] bg-fixed">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="w-full h-64 md:h-96 rounded-3xl bg-white/40 backdrop-blur-md shadow-xl overflow-hidden flex items-center justify-center">
          <img 
            src={cafeVisuals} 
            alt="Our Café Visuals" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#7A4A2E]">About Chai Duniya</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Chai Duniya is a modern café inspired by the warmth of handcrafted chai. 
            We combine tradition with contemporary flavors, offering a cozy space for 
            tea lovers to connect and enjoy the perfect cup of tea.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Our mission is simple: Serve premium chai that tastes like comfort, 
            quality, and passion in every sip.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
