"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const message = encodeURIComponent(
    "Hello I want to know more about your services",
  );

  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          {/* Brand & Contact */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl uppercase">
                  S
                </span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight font-outfit uppercase">
                Social Era
              </span>
            </Link>

            <div className="space-y-1">
              <p className="text-blue-100/60 text-sm font-inter">
                <a
                  href="tel:7905261190"
                  className="hover:text-brand-primary transition-colors hover:underline"
                >
                  7905261190
                </a>
              </p>
              <p className="text-blue-100/60 text-sm font-inter lowercase">
                <a
                  href="mailto:thesocialeradigitalpvtltd@gmail.com"
                  className="hover:text-brand-primary transition-colors hover:underline"
                >
                  thesocialeradigitalpvtltd@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Industries", href: "/industries" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-blue-100/60 hover:text-white transition-all duration-300 font-outfit uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social + WhatsApp */}
          <div className="text-right">
            <p className="text-blue-100/30 text-xs mb-2 uppercase tracking-widest font-inter">
              © {new Date().getFullYear()} Social Era.
            </p>

            <Link
              href="/admin/login"
              className="text-[10px] text-blue-100/10 hover:text-brand-primary transition-colors uppercase tracking-[0.2em] font-bold block mb-4"
            >
              Admin Panel
            </Link>

            <div className="flex justify-center md:justify-end space-x-4 items-center">
              {/* LinkedIn */}
              <a
                href="#"
                title="LinkedIn"
                className="text-blue-100/30 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* ✅ WhatsApp */}
              <a
                href={`https://wa.me/917905261190?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="text-green-500 hover:text-green-400 transition-colors relative z-50"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
