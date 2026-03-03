"use client";
import React from 'react';

const stats = [
    { label: "Lead Growth", value: "+300%", desc: "Average lead acquisition increase for corporate partners." },
    { label: "Direct Bookings", value: "+120%", desc: "Reducing dependency on third-party aggregators." },
    { label: "Retention Rate", value: "98%", desc: "Businesses that continue their growth journey with us." },
];

const HomeStats = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0A0D14] transition-colors duration-500 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[500px]">
                    {/* Large "Unlock" Card */}
                    <div className="lg:col-span-7 bg-slate-50 dark:bg-[#0F131C] rounded-3xl p-10 lg:p-16 border border-slate-200 dark:border-white/5 flex flex-col justify-end relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-16 h-16 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-300 dark:text-white/20 group-hover:rotate-45 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight font-outfit mb-8 tracking-tighter">
                            UNLOCK <span className="text-slate-200 dark:text-white/20">YOUR</span> <br />
                            INFRASTRUCTURE <br />
                            <span className="text-brand-primary">POTENTIAL</span>
                        </h2>
                        <button className="inline-flex items-center text-slate-800 dark:text-white font-bold uppercase tracking-[0.3em] group/btn">
                            Get in touch <span className="ml-4 w-12 h-[1px] bg-slate-900 dark:bg-white group-hover/btn:w-20 transition-all duration-500" />
                        </button>
                        {/* Ambient Glow */}
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-[80px]" />
                    </div>

                    {/* Stats Grid Column */}
                    <div className="lg:col-span-5 grid grid-rows-2 gap-8">
                        <div className="grid grid-cols-2 gap-8">
                            {stats.slice(0, 2).map((stat, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-[#141924] rounded-3xl p-8 border border-slate-200 dark:border-white/5 hover:border-brand-primary/20 transition-colors">
                                    <span className="text-4xl font-black text-brand-primary block mb-2 font-outfit">{stat.value}</span>
                                    <span className="text-[10px] font-black text-slate-500 dark:text-white/40 uppercase tracking-widest block mb-4">{stat.label}</span>
                                    <p className="text-[11px] text-slate-400 dark:text-white/30 leading-relaxed uppercase tracking-wider">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-slate-50 dark:bg-[#141924] rounded-3xl p-10 border border-slate-200 dark:border-white/5 relative overflow-hidden flex flex-col justify-between hover:border-brand-primary/20 transition-colors">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-brand-primary text-4xl font-black font-outfit">01 Million+</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight mb-4 uppercase tracking-wider">Market Dominance in Active Audiences Reach</h3>
                            <p className="text-slate-500 dark:text-white/40 text-sm font-inter">Accelerating growth for high-impact segments across our partner ecosystem.</p>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-[40px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStats;
