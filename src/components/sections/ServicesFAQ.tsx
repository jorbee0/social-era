"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How long until we see measurable results?",
        answer: "Typically, our corporate partners see significant traction within the first 90 days. For performance marketing, initial optimization happens within 14-21 days, followed by scaling."
    },
    {
        question: "Do you provide custom reporting dashboards?",
        answer: "Yes, every partner receives a live, 24/7 transparent dashboard that syncs all KPIs across search, social, and web performance metrics."
    },
    {
        question: "What is your typical engagement model?",
        answer: "We prefer structured 6-12 month growth partnerships, though we do handle high-stakes tactical deployments for specific seasonal or launch-based objectives."
    },
    {
        question: "How do you handle brand governance and security?",
        answer: "We follow strict corporate security protocols and brand guideline adherence systems. Every piece of content and every strategic shift passes through a formal governance loop."
    }
];

const ServicesFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-[#0A0D14] transition-colors duration-500">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-1.5 bg-brand-primary/5 border border-brand-primary/10 rounded-full mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary leading-none">FAQs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-outfit tracking-tighter">
                        Frequently Asked Questions <br />
                        <span className="text-brand-primary">From Our Partners</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 dark:bg-[#0F131C] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-900 dark:text-white font-outfit">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-600 dark:text-white/60 leading-relaxed font-inter">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesFAQ;
