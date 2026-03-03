import React from 'react';

/**
 * Pricing Page
 * SEO-friendly title and structured sections
 */
export const metadata = {
    title: "Pricing Plans | ProjectEra",
    description: "Transparent pricing plans for teams and businesses of all sizes.",
};

const PricingPage = () => {
    return (
        <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <section className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple, Transparent Pricing</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose the plan that's right for your business, no hidden fees.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: "Starter", price: "$0", features: ["Basic features", "1 project", "Community support"] },
                    { name: "Pro", price: "$49", features: ["Advanced features", "10 projects", "Priority support", "Custom domains"] },
                    { name: "Enterprise", price: "Custom", features: ["Unlimited everything", "Dedicated account manager", "SLA support", "Advanced security"] },
                ].map((plan, idx) => (
                    <div key={idx} className={`p-10 rounded-3xl border ${idx === 1 ? 'border-primary ring-1 ring-primary' : 'border-gray-100'}`}>
                        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="text-gray-500">/mo</span>}
                        </div>
                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${idx === 1 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default PricingPage;
