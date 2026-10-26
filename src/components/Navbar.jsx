import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Story', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Cinema Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/98 backdrop-blur-md border-b border-[#E5A93C]/30 py-3 shadow-2xl shadow-black/90'
          : 'bg-[#08090C]/95 backdrop-blur-md border-b border-[#E5A93C]/20 py-3.5 shadow-xl shadow-black/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Fedora Hat & Marquee Glow */}
          <a
            href="#"
            className="flex flex-col text-left group focus:outline-none focus:ring-2 focus:ring-[#E5A93C] rounded-lg p-1"
            aria-label="Mafia Talkies Home"
          >
            <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-gold-gradient transition-colors">
              MAFIA <span className="text-[#E5A93C]">TALKIES</span>
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-gray-400 font-medium">
              Cafe &bull; Cinema &bull; Lounge
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#E5A93C] transition-colors relative py-1 group tracking-wide"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E5A93C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={siteData.contact.phoneTel}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#E5A93C] transition-colors px-3 py-2 rounded-lg bg-[#141720]/80 border border-white/5"
              aria-label={`Call ${siteData.contact.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>{siteData.contact.displayPhone}</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FEEF9E] hover:to-[#C6861E] rounded-md shadow-lg shadow-[#E5A93C]/20 hover:shadow-[#E5A93C]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteData.contact.phoneTel}
              className="p-2 text-[#E5A93C] bg-[#141720] border border-[#E5A93C]/30 rounded-lg sm:hidden"
              aria-label="Call Mafia Talkies"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141720] border border-[#E5A93C]/30 text-gray-200 hover:text-[#E5A93C] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0A0C10] border-b border-[#E5A93C]/20 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/10 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>{siteData.company.hours}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:text-[#E5A93C] hover:bg-[#151821] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] rounded-lg shadow-md"
                >
                  Reserve Table / Lounge
                </a>

                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
