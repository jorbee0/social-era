"use client";

const steps = [
    {
        number: "01",
        title: "Research & Strategy",
        description: "In-depth analysis of your market, competitors, and growth opportunities to build a solid foundation."
    },
    {
        number: "02",
        title: "Planning & Execution",
        description: "Developing a custom roadmap and deploying performance-driven campaigns with precision."
    },
    {
        number: "03",
        title: "Performance Optimization",
        description: "Real-time monitoring and data-driven adjustments to ensure maximum impact and efficiency."
    },
    {
        number: "04",
        title: "Growth & Scale",
        description: "Scaling successful models to achieve sustainable market leadership and long-term results."
    }
];

const Process = () => {
    // Duplicate steps for seamless looping
    const allSteps = [...steps, ...steps, ...steps];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container-custom mb-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-outfit tracking-tight">
                        Our Structured Growth Process
                    </h2>
                    <p className="text-lg text-text-muted font-inter">
                        Success is built on a foundation of rigorous research and disciplined execution. Our 4-step process ensures consistent, authority-driven results.
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="flex animate-scroll whitespace-nowrap">
                    {allSteps.map((step, index) => (
                        <div
                            key={index}
                            className="inline-flex flex-col items-center text-center px-12 min-w-[300px] md:min-w-[450px]"
                        >
                            <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-8 shrink-0">
                                <span className="text-brand-primary font-black text-2xl font-outfit">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 font-outfit leading-tight whitespace-normal">
                                {step.title}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed font-inter max-w-[280px] whitespace-normal">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
