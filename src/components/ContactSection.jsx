const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0D0B0B] text-[#E8E0D5] py-16 px-6 md:py-24 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#E8E0D5]">
            Get in Touch
          </h2>
          <p className="text-[#9A8F85] max-w-md text-sm md:text-base leading-relaxed pt-2">
           Have questions, requests, or want to book a table? Reach out to us and our team will get back to you promptly. Whether it's VIP reservations, event inquiries, or general information, we're here to make your night at Studio 35 unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Visual Image */}
          <div className="relative group overflow-hidden rounded-sm aspect-square md:aspect-auto md:h-150">
            <img
              src="https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b882539d384e7562393736_2148325472.avif"
              alt="Club interior"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Red atmospheric overlay */}
            <div className="absolute inset-0 bg-[#CC1E1E]/20 mix-blend-multiply"></div>
          </div>

          {/* Right Side: Minimalist Form */}
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              {/* Name Input */}
              <div className="group border-b border-[#2A1E1A] focus-within:border-[#E8E0D5] transition-colors duration-300">
                <label className="block text-[#9A8F85] text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#E8E0D5]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent w-full pb-3 outline-none text-lg placeholder:text-[#2A1E1A] focus:placeholder:text-transparent"
                />
              </div>

              {/* Email Input */}
              <div className="group border-b border-[#2A1E1A] focus-within:border-[#E8E0D5] transition-colors duration-300">
                <label className="block text-[#9A8F85] text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#E8E0D5]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full pb-3 outline-none text-lg placeholder:text-[#2A1E1A] focus:placeholder:text-transparent"
                />
              </div>

              {/* Subject Input */}
              <div className="group border-b border-[#2A1E1A] focus-within:border-[#E8E0D5] transition-colors duration-300">
                <label className="block text-[#9A8F85] text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#E8E0D5]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="bg-transparent w-full  pb-3 outline-none text-lg placeholder:text-[#2A1E1A] focus:placeholder:text-transparent"
                />
              </div>

              {/* Message Input */}
              <div className="group border-b border-[#2A1E1A] focus-within:border-[#E8E0D5] transition-colors duration-300">
                <label className="block text-[#9A8F85] text-xs uppercase tracking-widest mb-2 transition-colors group-focus-within:text-[#E8E0D5]">
                  Message
                </label>
                <textarea
                  rows="1"
                  placeholder="Your message..."
                  className="bg-transparent w-full pb-3 outline-none text-lg resize-none placeholder:text-[#2A1E1A] focus:placeholder:text-transparent"
                ></textarea>
              </div>
            </div>

            {/* Red Submit Button */}
            <button className="w-full py-4 rounded-full bg-linear-to-r from-[#CC1E1E] to-[#E8382A] text-[#E8E0D5] font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(204,30,30,0.4)] transition-all active:scale-[0.98]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;