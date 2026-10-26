import React from 'react';
import { Film, MapPin, Coffee, Volume2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const AtmosphereFeatures = () => {
  const featureIcons = [Film, Volume2, Coffee, MapPin];

  return (
    <section
      className="py-16 md:py-24 relative bg-[#090A0D] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Why Choose Mafia Talkies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="The Distinction"
          title="Why Film Lovers & Foodies Choose Us"
          subtitle="More than just a cafe — a cinematic destination created for unforgettable moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.whyChooseUs.map((feature, idx) => {
            const Icon = featureIcons[idx % featureIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl cinema-border transition-all duration-300 hover:-translate-y-1.5 shadow-lg text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/30 flex items-center justify-center mb-5 group-hover:bg-[#E5A93C] transition-colors">
                  <Icon className="w-6 h-6 text-[#E5A93C] group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-white text-lg font-bold font-['Cinzel',serif] mb-2 group-hover:text-gold-gradient transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AtmosphereFeatures;
