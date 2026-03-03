import Link from 'next/link';

const services = [
    {
        title: "Social Media Management",
        description: "Strategic content creation and community growth for corporate brands, focused on authority and engagement.",
        icon: (
            <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        href: "/services/social-media"
    },
    {
        title: "Paid Advertising",
        description: "High-ROI performance marketing across search and social platforms, driven by data and precision targeting.",
        icon: (
            <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v2m0 0l-1-1m1 1l1-1" />
            </svg>
        ),
        href: "/services/paid-ads"
    },
    {
        title: "SEO & Website Development",
        description: "Technical optimization and premium corporate web experiences built for visibility, speed, and conversion.",
        icon: (
            <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        href: "/services/seo-web"
    },
    {
        title: "Political Campaign Digital Strategy",
        description: "Specialized digital advocacy, voter engagement systems, and high-impact digital messaging for political leadership.",
        icon: (
            <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        href: "/services/political-campaigns"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-outfit tracking-tight">
                        What We Do
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed font-inter">
                        We provide structured digital services tailored for established brands and organizations that demand precision, authority, and measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 border border-slate-100 border-t-brand-primary/40 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full rounded-lg hover:-translate-y-1"
                        >
                            <div className="mb-6 p-3 bg-brand-light/30 w-fit rounded-lg group-hover:bg-brand-primary/10 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 font-outfit leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm mb-8 flex-grow font-inter">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-brand-primary font-bold text-sm group-hover:translate-x-1 transition-transform duration-300"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
