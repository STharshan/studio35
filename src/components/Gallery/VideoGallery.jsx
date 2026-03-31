import React from "react";

const VideoGallery = () => {
  return (
    /* Main Section: Iron Black (#0D0B0B) */
    <section className="w-full relative bg-[#0D0B0B]">
      
      {/* 1. Background split: Bottom layer is Rust Dark (#1C1210) */}
      <div className="absolute inset-x-0 bottom-0 h-38 md:h-50 bg-[#1C1210]" />

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* 2. Video Player Section */}
        <div className="relative z-10">
          <div className="w-full aspect-16/8 md:aspect-16/7 overflow-hidden rounded-b-none border-x border-t border-[#A8A9AD]/10">
            <video
              className="w-full h-full object-cover transition-all duration-1000"
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dca39dfd1de8d00526ee5a_video 1080p 1-poster-00001.jpg"
            >
              <source src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dca39dfd1de8d00526ee5a_video 1080p 1-transcode.mp4" />
              <source src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dca39dfd1de8d00526ee5a_video 1080p 1-transcode.webm" />
            </video>
          </div>
        </div>

        {/* 3. Gallery Images (Overlapping the Video/BG split) */}
        <div className="relative z-20 -mt-60 sm:-mt-25 md:-mt-35 pb-10">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            
            {/* Image 1 - Steel Silver (#A8A9AD) Border + Signal Red */}
            <div className="group overflow-hidden rounded-sm border border-[#A8A9AD]/20 shadow-2xl aspect-4/3 md:aspect-video bg-[#0D0B0B]">
              <img
                src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dcae2cddc6963b5db41ee8_Event%20Img%2013.webp"
                alt="Event 1"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-transparent  transition-colors pointer-events-none" />
            </div>

            {/* Image 2 */}
            <div className="group overflow-hidden rounded-sm border border-[#A8A9AD]/20 shadow-2xl aspect-4/3 md:aspect-video bg-[#0D0B0B]">
              <img
                src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dcae812ace2c9c92673daf_Event%20Img%208.webp"
                alt="Event 2"
                loading="lazy"
                className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-transparent  transition-colors pointer-events-none" />
            </div>

            {/* Image 3 */}
            <div className="group overflow-hidden rounded-sm border border-[#A8A9AD]/20 shadow-2xl aspect-4/3 md:aspect-video bg-[#0D0B0B]">
              <img
                src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65d851f3d652383c8d5ed153_Event%20Img%201.webp"
                alt="Event 3"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-transparent  transition-colors pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;