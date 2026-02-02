import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-[#FFF7ED]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#7A4A2E] mb-8">Contact Us</h2>

        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 rounded-xl border border-[#7A4A2E] focus:outline-none focus:ring-2 focus:ring-[#B08968]" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-3 rounded-xl border border-[#7A4A2E] focus:outline-none focus:ring-2 focus:ring-[#B08968]" 
          />
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="w-full px-4 py-3 rounded-xl border border-[#7A4A2E] focus:outline-none focus:ring-2 focus:ring-[#B08968]"
          ></textarea>
          <button className="px-8 py-3 bg-[#7A4A2E] text-white rounded-full text-lg hover:bg-[#B08968] transition shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
