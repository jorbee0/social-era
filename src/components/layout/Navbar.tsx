"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0A0D14]/80 backdrop-blur-md shadow-md py-3"
          : "bg-white dark:bg-[#0A0D14] py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-brand-dark dark:text-white font-bold text-xl tracking-tight font-outfit">
            Social Era
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-text-muted dark:text-white/60 hover:text-brand-primary dark:hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-brand-primary text-white px-7 py-3 rounded-md text-sm font-bold hover:bg-brand-dark transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Book a Strategy Call
          </Link>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button className="text-brand-dark dark:text-white" title="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
