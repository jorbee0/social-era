"use client";
import React from 'react';
import Link from 'next/link';

import BrandMarquee from '@/components/sections/BrandMarquee';

const industries = [
    { name: "Fintech", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", tag: "Financial Tech" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", tag: "Medical Systems" },
    { name: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000", tag: "Retail Growth" },
    { name: "Education", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000", tag: "Campus Strategy" },
    { name: "Logistics", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000", tag: "Global Trade" },
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000", tag: "Architecture" },
    { name: "SaaS", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000", tag: "Software Systems" },
    { name: "Media", image: "https://images.unsplash.com/photo-1598897500632-d8558485600c?auto=format&fit=crop&q=80&w=1000", tag: "Creative Content" }
];

const IndustriesPage = () => {
    return (
        <main className="bg-white dark:bg-[#0A0D14] min-h-screen transition-colors duration-500">
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>

            {/* Minimal Header */}
            <section className="pt-32 pb-16 bg-white dark:bg-[#0A0D14]">
                <div className="container-custom">
                    <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark dark:text-white leading-[1.1] mb-6 font-outfit tracking-tight animate-fade-in-up">
                        Industries We <span className="text-brand-primary">Serve.</span>
                    </h1>
                    <p className="text-xl text-text-muted dark:text-white/60 leading-relaxed max-w-2xl font-inter animate-fade-in-up">
                        Deep expertise across various sectors to deliver industry-specific results and scalable performance systems.
                    </p>
                </div>
            </section>

            {/* Brand Marquee Section */}
            <BrandMarquee />

            {/* Industries Grid */}
            <section className="py-24 bg-[#050505] dark:bg-black">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industries.map((industry, i) => (
                            <div key={i} className="group relative aspect-[4/6] rounded-2xl overflow-hidden cursor-pointer bg-brand-dark border border-white/10 shadow-2xl">
                                {/* Image Layer */}
                                <div className="absolute inset-0 transition-all duration-700 ease-out transform scale-110 group-hover:scale-100 group-hover:grayscale group-hover:opacity-60">
                                    <img
                                        src={industry.image}
                                        alt={industry.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        {i === 0 && (
                                            <div className="bg-[#ff4d00] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded flex items-center shadow-lg">
                                                <span className="mr-1.5">✨</span> Featured
                                            </div>
                                        )}
                                        <div className="ml-auto bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center border border-white/20 transform group-hover:rotate-45 transition-transform duration-500">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5m0 0H8m11 0v11" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h4 className="text-2xl font-bold text-white mb-3 font-outfit leading-tight group-hover:text-brand-accent transition-colors">
                                            {industry.name}
                                        </h4>
                                        <p className="text-xs text-white/50 font-bold uppercase tracking-[0.2em]">
                                            {industry.tag}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Border Accent */}
                                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-500 rounded-2xl pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};



export default IndustriesPage;
