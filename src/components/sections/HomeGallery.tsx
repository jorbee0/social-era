"use client";
import React from 'react';
import Link from 'next/link';

const items = [
    { title: "Market Research", tag: "Strategy", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=1000" },
    { title: "Visual Arts", tag: "Content", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" },
    { title: "Code Excellence", tag: "Dev", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" },
    { title: "Lead Generation", tag: "Ads", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" },
];

const HomeGallery = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0A0D14] transition-colors duration-500">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tighter leading-tight">
                        How We Are Doing It <span className="text-brand-primary underline decoration-4 underline-offset-8">Faster</span> <br />
                        And Better Than Others!
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href="/contact"
                            className={`group relative flex-none md:flex-1 h-[400px] md:h-[450px] overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] md:hover:flex-[1.8]`}
                        >
                            {/* Image Background */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Arrow Button */}
                            <div className="absolute top-8 right-8 p-3 bg-white text-black rounded-full rotate-45 transform group-hover:rotate-0 transition-transform duration-500 scale-0 group-hover:scale-100">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-8 bottom-8">
                                <span className="inline-flex items-center px-3 py-1 bg-brand-primary/20 backdrop-blur-md rounded-full text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">
                                    ✦ {item.tag}
                                </span>
                                <h3 className="text-2xl font-black text-white font-outfit group-hover:text-brand-primary transition-colors duration-500">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
