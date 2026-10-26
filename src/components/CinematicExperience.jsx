import React, { useState } from 'react';
import { Film, Sparkles, ChevronRight, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const CinematicExperience = ({ onOpenImage }) => {
  const [activeZone, setActiveZone] = useState(siteData.experience[0].id);

  const selectedZone = siteData.experience.find((z) => z.id === activeZone) || siteData.experience[0];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-[#08090C] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Cinematic Zones & Experience"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-950/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Immersive Spaces"
          title="The Cinematic Experience"
          subtitle="Explore distinct zones tailored for movie lovers, romantic dates, casual work sessions, and lively gang hangouts."
        />

        {/* Zone Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {siteData.experience.map((zone) => {
            const isActive = zone.id === activeZone;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] text-black shadow-lg shadow-[#E5A93C]/25 -translate-y-0.5'
                    : 'bg-[#12141C] text-gray-400 hover:text-white border border-white/5 hover:border-[#E5A93C]/30'
                }`}
              >
                {zone.tag}
              </button>
            );
          })}
        </div>

        {/* Featured Zone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#12141D] to-[#0B0D13] p-6 sm:p-10 rounded-3xl cinema-border">
          
          {/* Left: Zone Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[#E5A93C] text-xs font-bold tracking-widest uppercase">
              <Film className="w-3.5 h-3.5" />
              <span>{selectedZone.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Cinzel',serif] tracking-tight">
              {selectedZone.title}
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {selectedZone.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {selectedZone.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E5A93C]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#F3BD58] rounded-xl shadow-lg transition-colors"
              >
                <span>Book This Space</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenImage && onOpenImage(selectedZone.image, selectedZone.title)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-gray-300 hover:text-white bg-[#1A1D27] hover:bg-[#232736] border border-white/10 rounded-xl transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <span>View Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Right: Large Featured High-Definition Photo */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] cinema-border cursor-pointer group shadow-2xl"
              onClick={() => onOpenImage && onOpenImage(selectedZone.image, selectedZone.title)}
            >
              <img
                src={selectedZone.image}
                alt={selectedZone.imageAlt}
                className="w-full h-full object-cover enhanced-photo group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#E5A93C]/40 text-xs text-[#E5A93C] font-semibold">
                Click To Enlarge
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-white text-base font-bold block font-['Cinzel',serif]">
                  {selectedZone.title}
                </span>
                <span className="text-xs text-gray-400">MAFIA TALKIES &bull; Barasat, Kolkata</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CinematicExperience;
