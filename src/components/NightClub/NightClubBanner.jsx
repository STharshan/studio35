import React from "react";

const galleryItems = [
  {
    title: "The Evolution",
    href: "https://acidum.like-themes.com/gallery/the-evolution/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog5-370x370.jpg",
  },
  {
    title: "Boom boom boom party now",
    href: "https://acidum.like-themes.com/gallery/boom-boom-boom-party-now/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog6-370x370.jpg",
  },
  {
    title: "Hollywood Night",
    href: "https://acidum.like-themes.com/gallery/hollywood-night/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog1-370x370.jpg",
  },
  {
    title: "Music is for Life!",
    href: "https://acidum.like-themes.com/gallery/music-is-for-life/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog11-370x370.jpg",
  },
  {
    title: "Acid trance dj’s night",
    href: "https://acidum.like-themes.com/gallery/acid-trance-djs-night/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog9-370x370.jpg",
  },
  {
    title: "Asot by armin van buuren",
    href: "https://acidum.like-themes.com/gallery/asot-by-armin-van-buuren/",
    img: "https://acidum.like-themes.com/wp-content/uploads/2017/10/blog10-370x370.jpg",
  },
];

export default function Gallery() {
  const colors = {
    ironBlack: "#0D0B0B",
    rustDark: "#1C1210",
    studioRed: "#CC1E1E",
    signalRed: "#E8382A",
    wornWhite: "#E8E0D5",
    ashGrey: "#9A8F85",
    steelSilver: "#A8A9AD",
    surfaceCard: "#2A1E1A",
  };

  return (
    <section 
      style={{ backgroundColor: colors.ironBlack }} 
      className="w-full py-20 px-4"
    >
      <div className="container mx-auto">
        <h2 
          style={{ color: colors.wornWhite }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-tighter"
        >
          Our <span style={{ color: colors.studioRed }}>Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-sm transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-square">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:grayscale-20"
                  />
                </a>
              </div>

              <div className="mt-4">
                <h5 
                  style={{ color: colors.wornWhite }}
                  className="font-bold text-lg text-left uppercase mb-10 tracking-wider group-hover:text-[#E8382A] transition-colors duration-300"
                >
                  {item.title}
                </h5>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}