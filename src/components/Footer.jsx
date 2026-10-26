import React from 'react';
import { Phone, Clock, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import footerPattern from '../assets/footer-pattern.svg';
import { siteData } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-[#E5A93C]/30 relative overflow-hidden text-left text-gray-400">
      
      {/* 35mm Film-Strip Celluloid Sprocket Border Track along Top Edge */}
      <div className="w-full bg-[#030406] border-b border-[#E5A93C]/20 py-2 px-3 sm:px-6 flex items-center justify-between overflow-hidden select-none relative z-20">
        {/* Left Film Sprocket Holes */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span
              key={`sprocket-l-${i}`}
              className="w-3 h-1.5 sm:w-3.5 sm:h-2 rounded-[2px] bg-[#0A0D14] border border-[#E5A93C]/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] block"
            />
          ))}
        </div>

        {/* Center Film Metadata Stamp */}
        <div className="px-3 flex items-center gap-2 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E5A93C]/80 uppercase whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse"></span>
          <span>35MM TALKIES ARCHIVE</span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline text-gray-400">SAFETY FILM BARASAT</span>
          <span className="hidden lg:inline text-white/30">•</span>
          <span className="hidden lg:inline text-[#E5A93C]/60">24 FPS</span>
        </div>

        {/* Right Film Sprocket Holes */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <span
              key={`sprocket-r-${i}`}
              className="w-3 h-1.5 sm:w-3.5 sm:h-2 rounded-[2px] bg-[#0A0D14] border border-[#E5A93C]/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] block"
            />
          ))}
        </div>
      </div>

      {/* Cinematic Seamless Art Deco & Celluloid Pattern Texture Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen bg-repeat z-0"
        style={{
          backgroundImage: `url(${footerPattern})`,
          backgroundSize: '160px 160px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Theatrical Spotlights & Warm Noir Glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#E5A93C]/12 via-[#E5A93C]/3 to-transparent blur-3xl pointer-events-none rounded-full z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-950/25 blur-3xl pointer-events-none rounded-full z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E5A93C]/10 blur-3xl pointer-events-none rounded-full z-0"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Cinematic Essence */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1">
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black tracking-wider text-white">
                MAFIA <span className="text-[#E5A93C]">TALKIES</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-gray-400 font-mono">
                Cinematic Cafe &bull; Movie Lounge &bull; Barasat
              </span>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              {siteData.company.shortDescription}
            </p>

            <div className="p-3.5 rounded-xl bg-[#0D0F15]/90 border border-[#E5A93C]/20 shadow-lg space-y-1 backdrop-blur-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E5A93C] block font-mono">
                LANDMARK LOCATION
              </span>
              <p className="text-xs text-gray-300">
                {siteData.company.landmark}, Arabinda Pally, Barasat, Kolkata 700125.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-['Cinzel',serif]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>The Story & Ambiance</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Big Screen & VIP Lounges</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Visual Odyssey (15 Photos)</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Book Table / Lounge</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-['Cinzel',serif]">
              Connect & Visit
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Daily Timings:</span>
                  <span className="text-gray-400">{siteData.company.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Call for Reservations:</span>
                  <a href={siteData.contact.phoneTel} className="text-[#E5A93C] hover:underline font-semibold font-['Cinzel',serif]">
                    {siteData.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">WhatsApp Booking:</span>
                  <a
                    href={siteData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium flex items-center gap-1"
                  >
                    Chat Directly on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Required Attribution - Centered */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-gray-500 text-center">
          <div>
            &copy; {currentYear} <span className="text-gray-300 font-semibold font-['Cinzel',serif]">MAFIA TALKIES</span>
          </div>
          <span className="hidden sm:inline text-gray-700">&bull;</span>
          {/* Exact Required Digital Exposure Online Service Attribution */}
          <div className="flex items-center justify-center flex-wrap">
            <span>Website Crafted with cinematic passion by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
