import React from "react";

const ChaiCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
      <div className="w-40 h-40 rounded-2xl bg-[#FFF7ED] flex items-center justify-center overflow-hidden mb-4">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        ) : (
          <span className="text-[#7A4A2E] font-semibold">Chai Image</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-[#7A4A2E] mb-2">{name}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <span className="text-[#B08968] font-semibold text-lg">${price}</span>
    </div>
  );
};

export default ChaiCard;
