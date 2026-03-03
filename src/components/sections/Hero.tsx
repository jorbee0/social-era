"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white dark:bg-[#0A0D14] transition-colors duration-500">
            {/* Custom Animations Style */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes blurFade {
                    0% { filter: blur(10px); opacity: 0; }
                    100% { filter: blur(0); opacity: 1; }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .animate-blur-fade {
                    animation: blurFade 1.2s ease-out forwards;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
            `}</style>

            {/* Premium Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    {/* Floating Top Badge */}
                    <div className="inline-flex items-center space-x-3 px-5 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-10 opacity-0 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                        <span className="text-[11px] font-extrabold text-slate-600 dark:text-white/80 uppercase tracking-[0.3em]">Research. Plan. Execute.</span>
                    </div>

                    {/* High-Impact Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] mb-10 font-outfit tracking-tighter opacity-0 animate-blur-fade delay-100">
                        Become The <span className="text-brand-primary">Digital Force</span> <br />
                        That Markets <span className="text-transparent border-b-4 border-brand-primary inline-flex text-slate-900 dark:text-white" style={{ WebkitTextStroke: '1px currentColor' }}>Demand.</span>
                    </h1>

                    {/* Refined Subheading */}
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-white/60 leading-relaxed mb-14 max-w-3xl mx-auto font-inter opacity-0 animate-fade-in-up delay-200">
                        Join an elite echelon of businesses preparing for high-stakes digital performance through structured corporate growth systems.
                    </p>

                    {/* CTA Container */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in-up delay-300">
                        <Link href="/contact" className="group relative w-full sm:w-auto overflow-hidden bg-brand-primary text-white px-12 py-5 rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(28,79,215,0.3)]">
                            <span className="relative z-10 flex items-center justify-center uppercase tracking-widest">
                                Start Journey <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Grid Overlay Pattern */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </section>
    );
};

export default Hero;
