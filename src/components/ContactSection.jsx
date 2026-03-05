import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#03000a] text-white py-16 px-6 md:py-24 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section: Matches the "Where the Magic Happens" alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed pt-2">
            Have questions, requests, or want to book a table? Reach out to us
            and our team will get back to you promptly. Whether it's VIP
            reservations, event inquiries, or general information, we're here to
            make your night at 99club unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Visual Image */}
          <div className="relative group overflow-hidden rounded-sm aspect-square md:aspect-auto md:h-[600px]">
            <img
              src="https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b882539d384e7562393736_2148325472.avif"
              alt="Club interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Blue atmospheric overlay to match the "Get in Touch" image vibe */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          </div>

          {/* Right Side: Minimalist Form */}
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              {/* Name Input */}
              <div className="group border-b border-gray-800 focus-within:border-white transition-colors duration-300">
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent w-full pb-3 outline-none text-lg placeholder:text-gray-800 focus:placeholder:text-transparent"
                />
              </div>

              {/* Email Input */}
              <div className="group border-b border-gray-800 focus-within:border-white transition-colors duration-300">
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full pb-3 outline-none text-lg placeholder:text-gray-800 focus:placeholder:text-transparent"
                />
              </div>

              {/* Subject Input */}
              <div className="group border-b border-gray-800 focus-within:border-white transition-colors duration-300">
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="bg-transparent w-full pb-3 outline-none text-lg placeholder:text-gray-800 focus:placeholder:text-transparent"
                />
              </div>

              {/* Message Input */}
              <div className="group border-b border-gray-800 focus-within:border-white transition-colors duration-300">
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-white">
                  Message
                </label>
                <textarea
                  rows="1"
                  placeholder="Your message..."
                  className="bg-transparent w-full pb-3 outline-none text-lg resize-none placeholder:text-gray-800 focus:placeholder:text-transparent"
                ></textarea>
              </div>
            </div>

            {/* Gradient Submit Button */}
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#5050fa] to-[#c385ff] text-white font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(125,108,255,0.4)] transition-all active:scale-[0.98]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;