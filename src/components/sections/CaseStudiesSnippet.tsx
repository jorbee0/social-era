import Link from 'next/link';

const caseStudies = [
    {
        category: "Financial Services",
        title: "Digital Transformation for Global Asset Management",
        description: "Modernizing core infrastructure to support 24/7 global operations with zero downtime.",
    },
    {
        category: "Manufacturing",
        title: "Optimizing Supply Chain through Predictive Analytics",
        description: "Reducing operational overhead by 22% through structured data integration and AI-driven insights.",
    }
];

const CaseStudiesSnippet = () => {
    return (
        <section className="section-spacing bg-bg-subtle">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 font-outfit">
                            Measurable Success. <br />
                            <span className="text-brand-primary">Proven Authority.</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            We deliver results that matter to the boardroom. Explore how we've helped leading corporations navigate complex digital transitions.
                        </p>
                    </div>
                    <Link href="/case-studies" className="text-brand-primary font-bold hover:underline mb-2">
                        View All Case Studies →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-white border border-slate-100 p-10 hover:border-brand-primary/20 transition-colors shadow-sm">
                            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                                {study.category}
                            </span>
                            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-outfit">
                                {study.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed mb-8">
                                {study.description}
                            </p>
                            <Link href={`/case-studies/study-${index + 1}`} className="text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors inline-flex items-center space-x-2">
                                <span>Read Full Case Study</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSnippet;
