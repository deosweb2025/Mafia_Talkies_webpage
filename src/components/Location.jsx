import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const Location = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(siteData.company.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location"
      className="py-20 md:py-28 relative bg-[#08090C] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Location and Directions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Find Our Cinema Lounge"
          title="Visit Mafia Talkies"
          subtitle="Conveniently situated in Barasat, Kolkata — directly opposite the landmark Anandabazar Office Gate 3."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Landmark & Hours Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl cinema-border bg-[#101219] text-left space-y-6">
            
            <div className="space-y-6">
              
              {/* Landmark Highlight Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#D92338]/20 via-[#1C1F2B] to-[#12141C] border border-[#D92338]/40">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFA5A5] block mb-1">
                  CRITICAL LANDMARK
                </span>
                <span className="text-white text-base font-bold font-['Cinzel',serif] block">
                  {siteData.company.landmark}
                </span>
                <span className="text-xs text-gray-300">
                  Arabinda Pally, Vidyasagar Road & Barrackpore Road
                </span>
              </div>

              {/* Full Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  <MapPin className="w-4 h-4" />
                  <span>Full Official Address</span>
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
                  {siteData.company.address}
                </p>
                
                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E5A93C] hover:text-[#FDE68A] transition-colors font-medium mt-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Address to Clipboard'}</span>
                </button>
              </div>

              {/* Business Hours */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  <Clock className="w-4 h-4" />
                  <span>Cafe & Lounge Timings</span>
                </div>
                <p className="text-white text-sm font-medium">
                  {siteData.company.hours}
                </p>
                <span className="text-xs text-gray-400 block">
                  Open all 7 days of the week for coffee, food, and big screen music video entertainment.
                </span>
              </div>

              {/* Phone Line */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  <Phone className="w-4 h-4" />
                  <span>Direct Reservations Line</span>
                </div>
                <a
                  href={siteData.contact.phoneTel}
                  className="text-lg font-bold text-white hover:text-[#E5A93C] transition-colors block font-['Cinzel',serif]"
                >
                  {siteData.contact.displayPhone}
                </a>
              </div>

            </div>

            {/* Google Maps Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CE8E25] shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={siteData.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-semibold text-gray-200 bg-[#171A24] hover:bg-[#202534] border border-white/10 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open Google Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden cinema-border relative min-h-[380px] bg-[#12141D] flex flex-col">
            <div className="p-3 bg-[#0D0F16] border-b border-[#E5A93C]/20 flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-white">Live Map View &bull; Barasat, North 24 Parganas</span>
              </div>
              <a
                href={siteData.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A93C] hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Expand Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[350px]">
              {/* Google Map Iframe */}
              <iframe
                title="Mafia Talkies Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7063124508933!2d88.4789524!3d22.7205166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899986b6241b7%3A0x8ddfec80e1a66848!2sBarasat%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[350px] border-0 filter contrast-[1.08] saturate-[1.1] invert-[0.92] hue-rotate-[180deg]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-[#090A0E]/90 backdrop-blur-md border border-[#E5A93C]/40 text-left shadow-2xl max-w-xs">
                <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider block font-['Cinzel',serif]">
                  MAFIA TALKIES
                </span>
                <p className="text-xs text-gray-200 mt-0.5">
                  Vidyasagar Rd, Opp. Anandabazar Gate 3, Barasat
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
