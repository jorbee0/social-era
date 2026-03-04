import Link from "next/link";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div
          className={`relative rounded-2xl p-12 md:p-24 overflow-hidden shadow-2xl shadow-blue-900/30 bg-brand-dark group min-h-[450px] flex items-center ${styles.ctaBg}`}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-brand-dark/85 group-hover:bg-brand-dark/80 transition-colors duration-500" />

          {/* Abstract background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 font-outfit leading-[1.15] tracking-tight">
              Ready to Scale Your Business with a{" "}
              <span className="text-brand-accent">
                Structured Digital Strategy?
              </span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-inter">
              Partner with a growth firm that values process over hype. Let&apos;s
              discuss your next move towards market leadership.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-brand-primary text-white px-12 py-5 rounded-md text-lg font-bold hover:bg-brand-primary/90 transition-all duration-300 shadow-xl shadow-blue-900/40 transform hover:-translate-y-1"
              >
                Book Your Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
