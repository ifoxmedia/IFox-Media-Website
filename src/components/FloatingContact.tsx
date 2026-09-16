import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

export const FloatingContact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-10 h-10 rounded-full bg-white text-gray-700 shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-transform active:scale-95 hidden sm:flex"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Direct Phone Call Button */}
      <a
        id="floating-phone-btn"
        href={`tel:${AGENCY_CONTACT.phoneRaw}`}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-gray-900 shadow-xl border border-gray-200 hover:border-orange-400 hover:text-[#FF5200] transition-all group"
        title="Call IFox Media"
      >
        <div className="w-7 h-7 rounded-full bg-orange-100 text-[#FF5200] flex items-center justify-center group-hover:bg-[#FF5200] group-hover:text-white transition-colors">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold hidden md:inline pr-1">{AGENCY_CONTACT.phoneDisplay}</span>
      </a>

      {/* WhatsApp Chat Floating Pill */}
      <a
        id="floating-whatsapp-btn"
        href={AGENCY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-extrabold tracking-wide uppercase">WhatsApp Us</span>
      </a>
    </div>
  );
};
