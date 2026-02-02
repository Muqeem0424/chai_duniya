import React from "react";
// Import premium chai visual image
import premiumChaiVisual from "../images/premium chai visuals.jpg";

const Hero = () => {
  // Function to scroll to menu section
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 bg-gradient-to-br from-[#FFF7ED] to-[#E6D3C8] bg-fixed">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#7A4A2E] leading-tight">
            Experience Chai <br className="hidden sm:block" /> Like Never Before
          </h1>
          <p className="text-base sm:text-lg text-[#4B3A2F] max-w-xl mx-auto md:mx-0">
            Premium handcrafted chai blends brewed with warmth, tradition,
            and a modern café experience designed for today’s generation.
          </p>
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={scrollToMenu}
              className="px-8 py-3 border border-[#7A4A2E] text-[#7A4A2E] rounded-full text-lg hover:bg-[#7A4A2E] hover:text-white transition shadow-lg"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl bg-white/50 backdrop-blur-md shadow-xl overflow-hidden flex items-center justify-center">
            <img 
              src={premiumChaiVisual} 
              alt="Premium Chai Visual" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
