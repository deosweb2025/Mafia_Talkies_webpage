import React, { useRef, useEffect } from 'react';
import { Film, Coffee, BookOpen, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';
import { gsap } from '../animations/gsapConfig';

const About = ({ onOpenImage }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const icons = [Film, Coffee, Sparkles, BookOpen];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-[#090A0D] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="About Mafia Talkies"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E5A93C]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="The Story Behind The Silver Screen"
          title="A Sanctuary for Film Lovers & Foodies"
          subtitle="Where the golden age of cinema meets contemporary Kolkata cafe culture."
        />

        {/* Narrative Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Client Authentic Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12141C] to-[#0A0C11] border border-[#E5A93C]/25 shadow-xl relative">
              <span className="text-6xl text-[#E5A93C]/20 font-['Cinzel',serif] absolute top-3 left-4 select-none">“</span>
              
              <p className="relative z-10 text-gray-200 text-base sm:text-lg leading-relaxed font-light italic pl-4">
                {siteData.about.quote}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="text-[#E5A93C] font-semibold tracking-wider uppercase font-['Cinzel',serif]">MAFIA TALKIES MANIFESTO</span>
                <span>Barasat, Kolkata</span>
              </div>
            </div>

            {/* Real Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteData.about.details.map((detail, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="about-card p-5 rounded-xl bg-[#11131A] border border-white/5 hover:border-[#E5A93C]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[#E5A93C]" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1.5 font-['Cinzel',serif]">
                      {detail.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {detail.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Asymmetric Editorial Gallery Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Crystal Dining */}
              <div
                className="relative rounded-2xl overflow-hidden cinema-border aspect-[3/4] cursor-pointer group"
                onClick={() => onOpenImage && onOpenImage(siteData.about.images[1], "The Parisian Dining Lounge - Mafia Talkies")}
              >
                <img
                  src={siteData.about.images[1]}
                  alt="The Parisian dining lounge with white and gold bistro chairs at Mafia Talkies"
                  className="w-full h-full object-cover enhanced-photo group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] text-[#E5A93C] font-bold uppercase tracking-wider block">Parisian Dining</span>
                  <span className="text-xs text-white font-medium">Crystal Chandelier & Bistro Seating</span>
                </div>
              </div>

              {/* Stacked Images 2 & 3 */}
              <div className="space-y-4 flex flex-col justify-between">
                
                {/* Image 2: Booth Lounge */}
                <div
                  className="relative rounded-2xl overflow-hidden cinema-border aspect-[4/3] cursor-pointer group"
                  onClick={() => onOpenImage && onOpenImage(siteData.about.images[2], "VIP Booth Lounge with Wood Acoustic Panelling")}
                >
                  <img
                    src={siteData.about.images[2]}
                    alt="VIP group lounge booths with fluted acoustic wood walls at Mafia Talkies"
                    className="w-full h-full object-cover enhanced-photo group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] text-[#E5A93C] font-bold uppercase tracking-wider block">VIP Booths</span>
                    <span className="text-xs text-white font-medium">Fluted Wood Panelling</span>
                  </div>
                </div>

                {/* Image 3: Bar & Mocktail Lounge */}
                <div
                  className="relative rounded-2xl overflow-hidden cinema-border aspect-[4/3] cursor-pointer group"
                  onClick={() => onOpenImage && onOpenImage(siteData.about.images[3], "The Mocktail Bar & Lounge Counter")}
                >
                  <img
                    src={siteData.about.images[3]}
                    alt="Mocktail bar counter with disco ball and glassware at Mafia Talkies"
                    className="w-full h-full object-cover enhanced-photo group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] text-[#E5A93C] font-bold uppercase tracking-wider block">The Bar</span>
                    <span className="text-xs text-white font-medium">Artisanal Drinks & Shakes</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
