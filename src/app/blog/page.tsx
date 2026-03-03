import React from 'react';

/**
 * Blog Page
 * SEO-friendly title and structured sections
 */
export const metadata = {
    title: "Blog & Insights | ProjectEra",
    description: "Read our latest articles on technology, design, and business strategy.",
};

const BlogPage = () => {
    return (
        <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Blog & Insights</h1>
                <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    The latest thoughts from our team on the future of digital innovation.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                    <article key={post} className="group cursor-pointer">
                        <div className="aspect-[16/10] bg-gray-100 rounded-2xl mb-6 group-hover:opacity-90 transition-opacity"></div>
                        <div className="space-y-3">
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">Technology</span>
                            <h2 className="text-2xl font-bold group-hover:underline underline-offset-4 decoration-primary">
                                The Future of Scalable Web Applications
                            </h2>
                            <p className="text-gray-600 line-clamp-2">
                                Exploring the latest trends in fullstack development and how businesses can leverage new technologies.
                            </p>
                            <time className="block text-sm text-gray-400 mt-4">Oct 24, 2026</time>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default BlogPage;
