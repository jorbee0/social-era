"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919598980683?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Pulse Ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-75 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center h-14 w-14 bg-green-600 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;