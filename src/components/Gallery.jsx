import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const Gallery = ({ onOpenImageByIndex }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Exterior', 'Screening', 'Lounge', 'Interior', 'Bar'];

  const filteredImages = selectedCategory === 'All'
    ? siteData.gallery
    : siteData.gallery.filter((img) => img.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 relative bg-[#08090C] border-t border-[#E5A93C]/10 overflow-hidden"
      aria-label="Cinema & Lounge Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Visual Odyssey"
          title="The Cinema & Lounge Gallery"
          subtitle="Explore the marquee storefront, widescreen movie lounge, plush VIP booths, and Parisian dining lounge."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] text-black shadow-lg shadow-[#E5A93C]/20 font-bold'
                    : 'bg-[#12141C] text-gray-400 hover:text-white border border-white/5 hover:border-[#E5A93C]/30'
                }`}
              >
                {cat === 'All' ? 'All Spaces (15)' : cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => {
            // Find its global index in siteData.gallery so Lightbox can paginate properly
            const globalIndex = siteData.gallery.findIndex((g) => g.id === image.id);

            return (
              <div
                key={image.id}
                onClick={() => onOpenImageByIndex && onOpenImageByIndex(globalIndex)}
                className="group relative rounded-2xl overflow-hidden cinema-border aspect-[4/3] bg-[#111319] cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#E5A93C]/10"
              >
                {/* Enhanced Image */}
                <img
                  src={image.src}
                  alt={image.caption || image.title}
                  loading="lazy"
                  className="w-full h-full object-cover enhanced-photo group-hover:scale-108 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Corner Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#141620]/90 border border-[#E5A93C]/40 text-[#E5A93C] backdrop-blur-md">
                    {image.category}
                  </span>
                </div>

                {/* Quick Enlarge Eye Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 duration-300">
                  <Eye className="w-4 h-4 text-[#E5A93C]" />
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-white text-base sm:text-lg font-bold font-['Cinzel',serif] tracking-wide group-hover:text-gold-gradient transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-2 mt-1 font-light">
                    {image.caption}
                  </p>
                </div>

                {/* Gold Cinema Frame Corner Accents on Hover */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E5A93C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#E5A93C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#E5A93C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E5A93C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-light inline-flex items-center gap-2 bg-[#12141D] px-4 py-2 rounded-full border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Click any photograph to view high-resolution fullscreen with zoom and gallery controls.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
