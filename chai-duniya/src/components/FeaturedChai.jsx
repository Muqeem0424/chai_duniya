import React from "react";
import ChaiCard from "./ChaiCard";

// Import images from src/images
import cardamomChai from "../images/cardamom chai.jpg";
import classicMasalaChai from "../images/Classic Masala chai.jpg";
import gingerChai from "../images/ginger chai.jpg";
import vanillaChaiLatte from "../images/vanilla chai latte.jpg";

const FeaturedChai = () => {
  const chaiList = [
    { name: "Classic Masala Chai", description: "Spiced with cardamom and cinnamon.", price: "3.99", image: classicMasalaChai },
    { name: "Ginger Chai", description: "Fresh ginger brewed for warmth.", price: "4.49", image: gingerChai },
    { name: "Cardamom Chai", description: "Premium cardamom flavor.", price: "4.99", image: cardamomChai },
    { name: "Vanilla Chai Latte", description: "Smooth and creamy vanilla infusion.", price: "5.49", image: vanillaChaiLatte }
  ];

  return (
    <section id="menu" className="py-16 bg-[#FAF3E8] bg-fixed">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#7A4A2E] text-center mb-10">
          Our Signature Chai
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chaiList.map((chai, idx) => (
            <ChaiCard
              key={idx}
              name={chai.name}
              description={chai.description}
              price={chai.price}
              image={chai.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChai;
