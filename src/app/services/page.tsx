"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServicesFAQ from "@/components/sections/ServicesFAQ";
// import Link from 'next/link';
// import ServicesFAQ from '@/components/sections/ServicesFAQ';

const detailedServices = [
  {
    id: "social-media",
    title: "Social Media Management",
    what: "End-to-end management of corporate social profiles, ensuring a consistent, authoritative, and engaging brand voice across LinkedIn, Instagram, and Twitter (X).",
    how: "We use a data-driven content calendar, high-production visual assets, and active community stewardship to maintain your market-leader status.",
    outcome:
      "Increased share of voice, 24/7 brand sentiment protection, and a highly qualified community ready for conversion.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-white dark:bg-[#0A0D14]",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    what: "High-stakes visual storytelling, ranging from high-production video pieces to technical whitepapers and corporate photography.",
    how: "Our in-house creative studio aligns every pixel and word with your established corporate identity and performance goals.",
    outcome:
      "A premium asset library that drives trust, reduces inquiry-to-close time, and upholds your brand benchmarks.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-slate-50 dark:bg-[#0F131C]",
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    what: "Precision-targeted performance marketing campaigns across Meta, Google, and LinkedIn designed for high-volume lead capture.",
    how: "We deploy multi-stage funnel systems and real-time bid optimization to maximize every dollar of your advertising budget.",
    outcome:
      "Consistent, measurable ROI and a stable pipeline of sales-qualified leads (SQLs) delivered with absolute transparency.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-white dark:bg-[#0A0D14]",
  },
  {
    id: "gmb",
    title: "Google Business Optimization",
    what: "Advanced management of local search presence to dominate high-intent organic traffic in specific geographic regions.",
    how: "Through technical GMB audits, review management systems, and local citation building, we put your brand at the top of the Map Pack.",
    outcome:
      "Explosive growth in direct phone inquiries, map-driven foot traffic, and 'near-me' search dominance.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-slate-50 dark:bg-[#0F131C]",
  },
  {
    id: "web-dev",
    title: "Website Development",
    what: "Bespoke corporate web systems built on cutting-edge frameworks like Next.js, prioritizing speed, security, and enterprise scale.",
    how: "Our engineering team focuses on clean code, technical SEO, and high-conversion UX design to turn your site into a dedicated revenue engine.",
    outcome:
      "A high-performance digital HQ with sub-second load times and a structured environment for market leadership.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-white dark:bg-[#0A0D14]",
  },
  {
    id: "seo",
    title: "SEO Services",
    what: "Long-term organic growth systems focused on technical excellence and high-authority content rankings.",
    how: "We provide comprehensive technical audits, semantic keyword mapping, and white-hat backlink acquisition strategies.",
    outcome:
      "Sustainable organic traffic growth, reduced dependency on paid ads, and long-term search engine authority.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-slate-50 dark:bg-[#0F131C]",
  },
  {
    id: "political",
    title: "Political Campaign Digital Support",
    what: "Specialized digital advocacy and voter engagement systems for high-stakes political and social missions.",
    how: "We use micro-targeting, real-time message testing, and rapid-response digital infrastructure to mobilize supporters effectively.",
    outcome:
      "Mobilized voter bases, clear-cut messaging dominance, and the digital tools necessary to win on a grand scale.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1000",
    bg: "bg-white dark:bg-[#0A0D14]",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-white dark:bg-[#0A0D14] transition-colors duration-500">
      {/* Introductory Header (Replacing the Hero) */}
      <section className="pt-40 pb-20 bg-white dark:bg-[#0A0D14]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-brand-primary/5 dark:bg-brand-primary/10 border border-brand-primary/10 rounded-full mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary leading-none">
                Market Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 font-outfit tracking-tighter">
              Our Specialized <br />
              <span className="text-brand-primary">Corporate Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 leading-relaxed font-inter max-w-2xl">
              We provide the high-stakes digital infrastructure and performance
              systems necessary for modern organizations to scale with precision
              and authority.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {detailedServices.map((service, i) => (
        <section
          key={service.id}
          className={`py-24 ${service.bg} transition-colors duration-500 overflow-hidden`}
        >
          <div className="container-custom">
            <div
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24`}
            >
              {/* Visual Column */}
              <div className="w-full lg:w-1/2 relative">
                <div className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  {/* Card Header dots like template 1 */}
                  <div className="absolute top-8 left-8 z-20 flex items-center space-x-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 dark:border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-[100px]" />
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2">
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-6">
                  Service {i + 1}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-10 font-outfit tracking-tighter">
                  {service.title}
                </h2>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-white/30 mb-3">
                      WHAT WE DO
                    </h3>
                    <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-inter">
                      {service.what}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-white/30 mb-3">
                      HOW WE DO
                    </h3>
                    <p className="text-slate-600 dark:text-white/50 leading-relaxed font-inter italic">
                      {service.how}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-white/30 mb-3">
                      EXPECTED OUTCOME
                    </h3>
                    <div className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2.5 flex-none" />
                      <p className="text-slate-800 dark:text-white font-bold leading-tight uppercase text-sm tracking-wide">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-brand-primary text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand-primary/20 hover:-translate-y-1"
                  >
                    Partner with us <span className="ml-3">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Integrated FAQs */}
      <ServicesFAQ />
    </main>
  );
};

export default ServicesPage;
