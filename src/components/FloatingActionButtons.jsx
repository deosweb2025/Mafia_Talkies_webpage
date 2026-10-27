import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { siteData } from '../data/siteData';

const FloatingActionButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5 pointer-events-auto"
    >
      {/* Floating WhatsApp Button (Official WhatsApp Icon, Stylish Glowing Orb) */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {hoveredButton === 'whatsapp' && (
          <div className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0F1318] border border-emerald-500/40 text-emerald-400 text-xs font-semibold whitespace-nowrap shadow-xl">
            WhatsApp Us
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0F1318] border-t border-r border-emerald-500/40"></span>
          </div>
        )}

        <a
          href={siteData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label="Chat with Mafia Talkies on WhatsApp"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#25D366] via-[#1EBE5D] to-[#128C7E] hover:from-[#2BF576] hover:to-[#17A08F] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 border-2 border-white/30 hover:border-white hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        >
          {/* Subtle Outer Ping Wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>

          {/* Official WhatsApp Icon */}
          <WhatsAppIcon className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-white drop-shadow-md group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Floating Call Button (Icon Only, Stylish Gold/Crimson Orb) */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {hoveredButton === 'phone' && (
          <div className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0F1318] border border-[#E5A93C]/40 text-[#E5A93C] text-xs font-semibold whitespace-nowrap shadow-xl">
            Call {siteData.contact.displayPhone}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0F1318] border-t border-r border-[#E5A93C]/40"></span>
          </div>
        )}

        <a
          href={siteData.contact.phoneTel}
          onMouseEnter={() => setHoveredButton('phone')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label={`Call Mafia Talkies now at ${siteData.contact.phone}`}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CE8E25] text-black flex items-center justify-center shadow-2xl shadow-black/90 border-2 border-[#FDE68A]/60 hover:border-white hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#E5A93C]/50"
        >
          {/* Subtle Outer Ping Wave */}
          <span className="absolute inset-0 rounded-full bg-[#E5A93C] animate-ping opacity-20 pointer-events-none"></span>

          {/* Phone Icon */}
          <Phone className="w-6 h-6 sm:w-6 sm:h-6 text-black fill-black/20 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </aside>
  );
};

export default FloatingActionButtons;
