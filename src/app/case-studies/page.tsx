"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import { Loader2 } from "lucide-react";

interface CaseStudy {
  _id: string;
  industryCategory: string;
  title: string;
  challenge: { title: string; points: string[] };
  strategy: { title: string; points: string[] };
  after: { title: string; metrics: string[] };
  image: string;
}

const CaseStudyBlock = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-24 ${isEven ? "bg-white dark:bg-[#0A0D14]" : "bg-slate-50 dark:bg-[#0F131C]"} transition-colors duration-500`}
    >
      <div className="container-custom">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center`}
        >
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              {study.industryCategory}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark dark:text-white mb-10 font-outfit tracking-tight">
              {study.title}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                  {study.challenge.title}
                </h3>
                <ul className="space-y-3">
                  {study.challenge.points.map((p, i) => (
                    <li
                      key={i}
                      className="text-text-muted dark:text-white/60 font-inter flex items-start text-sm"
                    >
                      <span className="mr-3 text-red-600">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-2" />
                  {study.strategy.title}
                </h3>
                <ul className="space-y-3">
                  {study.strategy.points.map((p, i) => (
                    <li
                      key={i}
                      className="text-text-muted dark:text-white/60 font-inter flex items-start text-sm"
                    >
                      <span className="mr-3 text-brand-primary">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-brand-dark dark:bg-black rounded-xl border border-white/5 shadow-xl transition-all hover:border-brand-accent/30">
                <h3 className="text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-6">
                  {study.after.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {study.after.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white text-lg font-bold">
                        {m.split(" ")[0]}
                      </span>
                      <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                        {m.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
              {(study.image?.startsWith("http") || study.image?.startsWith("/")) ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={study.image}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  alt="Case Study Visual"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Image format invalid</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-dark font-bold px-6 py-3 rounded-md shadow-lg transform group-hover:-translate-y-2 transition-transform">
              Proven Result
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const res = await fetch("/api/case-studies", { cache: "no-store" });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Status ${res.status}: ${text}`);
        }
        const data = await res.json();
        if (data.success) {
          setCaseStudies(data.data);
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  return (
    <main className="bg-white dark:bg-[#0A0D14] transition-colors duration-500">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      {/* Minimal Header */}
      <section className="pt-32 pb-16 bg-white dark:bg-[#0A0D14]">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark dark:text-white leading-[1.1] mb-6 font-outfit tracking-tight animate-fade-in-up">
            Case <span className="text-brand-primary">Studies.</span>
          </h1>
          <p className="text-xl text-text-muted dark:text-white/60 leading-relaxed max-w-2xl font-inter animate-fade-in-up delay-100">
            Proven Results. Structured Growth. Measurable Impact across
            industries.
          </p>
        </div>
      </section>

      {/* Case Studies Loop */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 border-y border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-[#0A0D14]">
          <Loader2 className="w-10 h-10 animate-spin text-brand-primary mb-4" />
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Loading dynamic case studies...
          </p>
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="py-40 text-center border-y border-slate-100 dark:border-white/5">
          <p className="text-slate-400 font-medium">
            Coming soon: Our latest success stories.
          </p>
        </div>
      ) : (
        caseStudies.map((study, idx) => (
          <CaseStudyBlock key={study._id} study={study} index={idx} />
        ))
      )}

      {/* Visual Examples Section */}
      <section className="py-24 bg-brand-dark dark:bg-black text-white overflow-hidden">
        <div className="container-custom mb-16">
          <h2 className="text-xs font-bold text-brand-accent uppercase tracking-[0.4em] mb-4">
            Visual Evidence
          </h2>
          <h3 className="text-4xl font-bold font-outfit">
            Transformation Previews
          </h3>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Website Redesign", tag: "Architecture" },
              { title: "Social Transformation", tag: "Engagement" },
              { title: "Ad Performance", tag: "Lead Gen" },
              { title: "Brand Identity", tag: "Positioning" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-outfit font-black text-6xl">
                    {i + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest block mb-2">
                    {item.tag}
                  </span>
                  <span className="text-lg font-bold">{item.title}</span>
                </div>
                <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/20 transition-all rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary Section */}
      <section className="py-24 bg-white dark:bg-[#0A0D14] text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-5xl lg:text-7xl font-bold text-brand-dark dark:text-white mb-12 font-outfit tracking-tighter">
            Numbers That Define <br />
            <span className="text-brand-primary">Performance.</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { val: "+300%", label: "Lead Growth" },
              { val: "+180%", label: "Engagement" },
              { val: "4X", label: "ROAS" },
              { val: "+250%", label: "Organic Traffic" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-black text-brand-dark dark:text-white mb-4">
                  {stat.val}
                </span>
                <span className="text-xs font-black text-brand-primary uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
