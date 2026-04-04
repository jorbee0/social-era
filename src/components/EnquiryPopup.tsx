"use client";
import React, { useState, useEffect } from "react";
import { X, Send, Loader2, Cpu, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EnquiryPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    // Only show on home page
    if (pathname === "/") {
      // Show popup after a slight delay on every load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setTimeout(() => setIsOpen(false), 3000); // Close after 3 seconds
      } else {
        setError(result.error || "Failed to send inquiry.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (pathname !== "/" || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-500 opacity-100"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content - Transparent / Glassmorphic */}
      <div className="relative w-full max-w-4xl bg-[#0a0d14]/40 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(47,168,224,0.15)] border border-white/20 flex flex-col md:flex-row transform transition-all duration-500 scale-100 opacity-100">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 text-white/70 hover:text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:bg-black/80 border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Tech Image */}
        <div className="w-full md:w-5/12 relative hidden md:block border-r border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/80 via-brand-dark/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-brand-primary/10 z-10 mix-blend-overlay" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta-bg.png"
            alt="Tech Background"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
          />
          <div className="absolute bottom-10 left-8 right-8 z-20 space-y-4">
            <div className="w-12 h-12 bg-black/30 border border-brand-primary/30 text-brand-accent rounded-xl flex items-center justify-center backdrop-blur-md">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-white text-2xl font-outfit font-bold leading-tight drop-shadow-lg">
              Ready to <span className="text-brand-accent text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">accelerate</span> your growth?
            </h3>
            <p className="text-white/80 text-sm font-inter drop-shadow-md">
              Connect with our digital experts and unlock your brand&apos;s true potential.
            </p>
          </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-black/20 backdrop-blur-md relative overflow-hidden">

          {/* Decorative tech elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Let&apos;s Talk Business
              </span>
              <h2 className="text-3xl font-outfit font-bold text-white mb-2">Start Your Project</h2>
              <p className="text-sm text-white/50 font-inter">Drop us a line and we&apos;ll get back to you within 24 hours.</p>
            </div>

            {success ? (
              <div className="flex flex-col items-center justify-center h-64 text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-white/60 text-sm">Our team will be in touch with you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-black/40 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="last name"
                      className="w-full bg-black/40 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="thesocialeradigitalpvtltd@gmail.com"
                      className="w-full bg-black/40 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91  79052 61190"
                      className="w-full bg-black/40 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">Service Interest</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 text-white/80 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0d14] text-white/50">Select a service...</option>
                      <option value="Social Media Expansion" className="bg-[#0a0d14]">Social Media Expansion</option>
                      <option value="Brand Ecosystem" className="bg-[#0a0d14]">Brand Ecosystem</option>
                      <option value="Traffic Generation" className="bg-[#0a0d14]">Traffic Generation</option>
                      <option value="Content & Creative Strategy" className="bg-[#0a0d14]">Content & Creative Strategy</option>
                      <option value="Conversion Optimization" className="bg-[#0a0d14]">Conversion Optimization</option>
                      <option value="Other" className="bg-[#0a0d14]">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 ml-1">Brief Description *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals..."
                    className="w-full bg-black/40 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/50 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative bg-brand-primary hover:bg-brand-dark text-white rounded-xl py-4 overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed border border-brand-primary hover:border-brand-accent/50 shadow-[0_0_20px_rgba(47,168,224,0.3)] hover:shadow-[0_0_30px_rgba(47,168,224,0.5)] flex items-center justify-center space-x-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="font-bold uppercase tracking-widest text-xs relative z-10">Send Request</span>
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
