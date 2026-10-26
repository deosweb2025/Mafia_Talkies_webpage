import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  goldGradient = true,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#181B22] border border-[#E5A93C]/30 text-[#E5A93C] text-xs font-semibold tracking-widest uppercase`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Cinzel',serif] mb-4 ${
          goldGradient ? 'text-gold-gradient' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}

      {/* Decorative cinema filament divider with smooth in-view appearance animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`flex items-center gap-3 mt-5 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        {/* Left filament line smoothly extending outward to the left */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.12,
              },
            },
          }}
          style={{ originX: 1 }}
          className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5A93C]/40 to-[#E5A93C]"
        />

        {/* Center glowing cinema diamond popping in smoothly */}
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0, rotate: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              rotate: 45,
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="w-2.5 h-2.5 border border-[#E5A93C] bg-[#E5A93C]/30 shadow-[0_0_10px_rgba(229,169,60,0.55)] shrink-0"
        />

        {/* Right filament line smoothly extending outward to the right */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.12,
              },
            },
          }}
          style={{ originX: 0 }}
          className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent via-[#E5A93C]/40 to-[#E5A93C]"
        />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
