"use client";
import React from 'react';

const flagshipServices = [
    {
        name: "Performance Marketing 2.0",
        desc: "Strategic precision advertising focused on high-volume lead capture and market dominance. Ace your market presence with our expert-led delivery, packed with interactive data systems.",
        stats: ["+300% Growth", "Data Driven", "24/7 Monitoring"],
        price: "$4,999",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000",
        bgColor: "bg-brand-primary"
    },
    {
        name: "Enterprise Web Systems",
        desc: "High-performance corporate portals engineered for unprecedented speed, security, and conversion metrics. We build infrastructure that scales with your ambition, prioritizing UX and technical SEO.",
        stats: ["Infinite Scale", "Cloud Native", "Certified Build"],
        price: "$8,500",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
        bgColor: "bg-slate-900 dark:bg-slate-950"
    }
];

const StackedServices = () => {
    return (
        <section className="py-32 bg-slate-50 dark:bg-[#0F131C] transition-colors duration-500 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-6xl mx-auto space-y-[-100px]">
                    {flagshipServices.map((service, i) => (
                        <div
                            key={i}
                            className={`sticky top-[100px] md:top-[150px] ${service.bgColor} rounded-[2rem] md:rounded-[3rem] p-8 lg:p-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border border-white/10 transition-transform duration-500 hover:scale-[1.01] overflow-hidden mb-12 lg:mb-0`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Visual */}
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="text-white">
                                    <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight font-outfit tracking-tighter">
                                        {service.name}
                                    </h2>
                                    <p className="text-lg text-white/70 leading-relaxed mb-10 font-inter">
                                        {service.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-12">
                                        {service.stats.map((s, idx) => (
                                            <div key={idx} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/5">
                                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{s}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] block mb-1">Starting from</span>
                                            <span className="text-3xl font-black">Price <span className="text-brand-accent">{service.price}</span> <span className="text-xs text-white/20 line-through tracking-normal">$10,000</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-opacity">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
        </section>
    );
};

export default StackedServices;
