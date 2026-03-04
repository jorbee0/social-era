"use client";
import React from "react";

const row1 = [
  { name: "The Economic Times" },
  { name: "Adidas" },
  { name: "Shaadi.com" },
  { name: "Motorola" },
  { name: "Big Billion Day" },
];

const row2 = [
  { name: "Finanvo" },
  { name: "Technowire" },
  { name: "Complygate" },
  { name: "Magadh Paramedical" },
  { name: "Chanakya College" },
];

const BrandMarquee = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0A0D14] transition-colors duration-500 overflow-hidden border-y border-slate-100 dark:border-white/5">
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marquee-left 40s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marquee-right 40s linear infinite;
                    }
                    .pause-on-hover:hover {
                        animation-play-state: paused;
                    }
                `,
        }}
      />

      <div className="container-custom mb-14 text-center">
        <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-4">
          Strategic Partners
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white font-outfit tracking-tighter">
          Brands That{" "}
          <span className="text-brand-primary text-outline-primary">
            Trust Us.
          </span>
        </h2>
      </div>

      {/* Row 1: Leftward Scroll */}
      <div className="relative flex overflow-hidden mb-16">
        <div className="flex whitespace-nowrap animate-marquee-left pause-on-hover px-4">
          {[...row1, ...row1, ...row1, ...row1].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 group cursor-default"
            >
              <span className="text-2xl md:text-4xl font-black text-blue-600/40 group-hover:text-blue-500 transition-all duration-500 uppercase tracking-tighter font-outfit">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Scroll */}
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-right pause-on-hover px-4">
          {[...row2, ...row2, ...row2, ...row2].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-10 group cursor-default"
            >
              <span className="text-xl md:text-3xl font-black text-blue-600/30 group-hover:text-blue-500 transition-all duration-500 uppercase tracking-tighter font-outfit">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
