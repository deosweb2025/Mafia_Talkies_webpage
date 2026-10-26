import React, { useState } from 'react';
import { Coffee, GlassWater, UtensilsCrossed, Star, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const MenuHighlights = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [Coffee, GlassWater, UtensilsCrossed];

  return (
    <section
      id="menu"
      className="py-20 md:py-28 relative bg-[#090A0E] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Menu Highlights and Artisanal Brews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Gourmet Flavours"
          title="Artisanal Brews & Cinema Munchies"
          subtitle="Crafted with passion — from rich espresso roasts and signature cool mocktails to delectable snacks."
        />

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteData.menuHighlights.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = activeCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] text-black shadow-lg shadow-[#E5A93C]/20'
                    : 'bg-[#12141C] text-gray-400 hover:text-white border border-white/5 hover:border-[#E5A93C]/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items: Vintage Cinema Ticket Aesthetic */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl cinema-border p-6 sm:p-10 shadow-2xl">
            
            {/* Header with cinema ticket perforation */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E5A93C]/20">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C] block">
                  TALKIES GOURMET REEL
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif] tracking-wide mt-1">
                  {siteData.menuHighlights[activeCategory].category}
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs text-[#E5A93C] font-semibold">
                <Star className="w-3.5 h-3.5 fill-[#E5A93C]" />
                <span>Freshly Prepared</span>
              </div>
            </div>

            {/* Item Rows */}
            <div className="divide-y divide-white/5 pt-2">
              {siteData.menuHighlights[activeCategory].items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-white/[0.02] px-3 rounded-xl transition-colors"
                >
                  <div className="text-left space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-base sm:text-lg group-hover:text-[#E5A93C] transition-colors font-['Cinzel',serif]">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D92338]/20 border border-[#D92338]/40 text-[#FFA5A5]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-end shrink-0">
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-[#E5A93C] hover:text-[#FDE68A] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire / Order</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Ticket Note */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#E5A93C]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <span>Pair your snack with our big screen music video entertainment!</span>
              </div>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A93C] hover:underline font-semibold"
              >
                Ask for Today's Specials on WhatsApp &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;
