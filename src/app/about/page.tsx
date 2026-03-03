"use client";
import Link from 'next/link';

const AboutPage = () => {
    return (
        <main className="bg-white dark:bg-[#0A0D14] min-h-screen transition-colors duration-500 text-brand-dark dark:text-white">
            {/* Custom Animations Style */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>

            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-slate-100 dark:border-white/5">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 font-outfit tracking-tight animate-fade-in-up">
                            About <span className="text-brand-primary">Social Era.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted dark:text-white/60 leading-relaxed font-inter animate-fade-in-up delay-100">
                            The Social Era Digital Pvt. Ltd. is a premium corporate growth partner dedicated to transforming digital presence into authoritative market leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-up delay-200">
                            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-primary mb-4">Company Overview</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-outfit">Building the Future of Digital Authority.</h3>
                            <div className="space-y-4 text-text-muted dark:text-white/60 leading-relaxed font-inter">
                                <p>
                                    Founded on the principle that digital growth should be structured, measurable, and authoritative, Social Era has emerged as a trusted partner for corporations seeking refined digital scaling.
                                </p>
                                <p>
                                    We don't just provide services; we build performance systems. Our approach combines technical excellence with deep market intelligence to ensure every digital touchpoint serves a strategic purpose.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-300">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                                alt="Modern Office"
                                className="w-full h-full object-cover grayscale dark:grayscale-0 dark:opacity-80 transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 border-b border-slate-100 dark:border-white/5">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-200">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-outfit">Our Mission</h4>
                            <p className="text-text-muted dark:text-white/60 leading-relaxed font-inter">
                                To empower brands with structured digital systems that drive predictable growth, establishing them as absolute authorities in their respective industries.
                            </p>
                        </div>
                        <div className="p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-300">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 font-outfit">Our Vision</h4>
                            <p className="text-text-muted dark:text-white/60 leading-relaxed font-inter">
                                To become the global gold standard for corporate digital growth, recognized for our unwavering commitment to process, precision, and ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-brand-dark dark:bg-black relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-primary mb-4">Core Differentiators</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-outfit">Why Choose Social Era?</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Process-Driven",
                                desc: "No guesswork. Every strategy is executed following a strict, verified methodology.",
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            },
                            {
                                title: "Authority-First",
                                desc: "We focus on building long-term digital equity and prestige for your corporate brand.",
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "ROI-Focused",
                                desc: "Our performance metrics are tied directly to your business's bottom line.",
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 font-outfit">{item.title}</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-inter">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
            </section>
        </main>
    );
}

export default AboutPage;
