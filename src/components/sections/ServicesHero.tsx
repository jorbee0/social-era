"use client";
import React from "react";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white dark:bg-[#0A0D14] transition-colors duration-500">
      {/* Template-inspired Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 dark:opacity-20">
          {/* Blurred cards/elements in background as seen in template 2 */}
          <div className="absolute top-[20%] left-[15%] w-64 h-80 bg-slate-200 dark:bg-white/5 rounded-2xl rotate-12 blur-sm" />
          <div className="absolute bottom-[10%] right-[20%] w-72 h-96 bg-slate-200 dark:bg-white/5 rounded-2xl -rotate-12 blur-sm" />
          <div className="absolute top-[40%] right-[10%] w-48 h-64 bg-slate-200 dark:bg-white/5 rounded-2xl rotate-45 blur-md" />
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] mb-10 font-outfit tracking-tighter">
            Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              Digital Presence
            </span>{" "}
            <br />
            Into A Market Force.
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-white/60 leading-relaxed mb-14 max-w-3xl mx-auto font-inter">
            Strategic, process-driven performance systems engineered for modern
            corporations seeking unprecedented digital growth.
          </p>

          <div className="flex justify-center">
            <Link
              href="#services-grid"
              className="group relative overflow-hidden bg-brand-primary text-white px-12 py-5 rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-primary/20"
            >
              <span className="relative z-10 flex items-center justify-center uppercase tracking-widest text-sm">
                Explore Services{" "}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
