import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, ChevronLeft, ChevronRight, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

// Top curated real photos of Mafia Talkies for the 2-second film reel slideshow
import storefrontImg from '../assets/images/storefront_night.jpg';
import crystalSalonImg from '../assets/images/crystal_salon_bistro.jpg';
import musicScreenImg from '../assets/images/music_screen_lounge.jpg';
import heroTexture from '../assets/hero-texture.svg';

const heroSlides = [
  {
    id: 1,
    image: storefrontImg,
    title: 'The Marquee Storefront',
    subtitle: 'Illuminated Bulb Sign & Vintage Awning',
  },
  {
    id: 2,
    image: crystalSalonImg,
    title: 'The Parisian Dining Lounge',
    subtitle: 'Crystal Chandeliers, Artisanal Brews & Neon Noir',
  },
  {
    id: 3,
    image: musicScreenImg,
    title: 'Big Screen Music & Entertainment',
    subtitle: 'Music Videos & Visuals on the Big Projection Screen',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  center: {
    x: '0%',
    opacity: 1,
    transition: {
      x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.25 },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 1,
    transition: {
      x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.25 },
    },
  }),
};

const Hero = ({ onOpenImage }) => {
  const [[currentSlide, direction], setSlide] = useState([0, 1]);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % heroSlides.length, 1]);
  }, []);

  const prevSlide = useCallback(() => {
    setSlide(([prev]) => [(prev - 1 + heroSlides.length) % heroSlides.length, -1]);
  }, []);

  // Automated slide change (advancing smoothly from right to left)
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide, currentSlide]);

  const activeSlide = heroSlides[currentSlide];

  const handleManualSelect = (idx) => {
    setSlide(([prev]) => [idx, idx >= prev ? 1 : -1]);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <section
      className="relative min-h-[calc(100svh-4.5rem)] pt-24 sm:pt-28 lg:pt-32 pb-10 flex items-center overflow-hidden bg-[#06070B]"
      aria-label="Welcome to Mafia Talkies"
    >
      {/* 1. Multi-tone Cinematic Colored Gradient Foundation */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,#18130C_0%,transparent_65%),radial-gradient(ellipse_70%_60%_at_85%_35%,#150D1E_0%,transparent_60%),radial-gradient(ellipse_60%_50%_at_50%_100%,#110912_0%,transparent_70%),linear-gradient(145deg,#08090E_0%,#05060A_50%,#090A10_100%)] z-0"
        aria-hidden="true"
      />

      {/* 2. Top-Left Golden Marquee Theatrical Spotlight Halo */}
      <div 
        className="absolute -top-36 -left-32 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full bg-gradient-to-br from-[#E5A93C]/18 via-[#D4AF37]/8 to-transparent blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Top-Right Neon Violet & Cinema Magenta Atmosphere Spotlight */}
      <div 
        className="absolute -top-16 -right-24 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/15 via-[#C026D3]/10 to-transparent blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 4. Center Projector Light Beam */}
      <div 
        className="absolute -top-10 left-1/4 w-[700px] sm:w-[900px] h-[550px] bg-gradient-to-b from-[#FDE68A]/8 via-[#E5A93C]/3 to-transparent rotate-[20deg] blur-[110px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 5. Bottom-Left Crimson Velvet Corner Accent */}
      <div 
        className="absolute -bottom-24 left-1/12 w-[500px] h-[350px] rounded-full bg-[#8B1E1E]/12 blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 6. Bespoke Cinema Art Deco & Fluted Wood Seamless Colored Micro-Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen bg-repeat z-0"
        style={{
          backgroundImage: `url(${heroTexture})`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 40%, transparent 95%)',
        }}
        aria-hidden="true"
      />

      {/* 7. Perimeter Film Noir Vignette & Soft Gradient Depth Masks */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,4,6,0.75)_100%)] z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#06070B] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* ============================================================== */}
          {/* LEFT WRAPPER ON DESKTOP / UNWRAPPED (contents) ON MOBILE       */}
          {/* ============================================================== */}
          <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:space-y-4 text-left">
            
            {/* 1. TOP POSITION ON MOBILE: Eyebrow + Big Headline + Tagline */}
            <div className="order-1 text-left space-y-2.5 sm:space-y-3">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#13151D] border border-[#E5A93C]/40 text-[#E5A93C] shadow-lg shadow-black/80">
                <Film className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                  THE CINEMATIC CAFE & BISTRO
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black font-['Cinzel',serif] tracking-tight leading-[1.06] text-white">
                  MAFIA <span className="text-gold-gradient drop-shadow-[0_2px_15px_rgba(229,169,60,0.35)]">TALKIES</span>
                </h1>
                <p className="font-['Playfair_Display',serif] italic text-base sm:text-lg md:text-xl lg:text-2xl text-[#E5A93C] font-normal tracking-wide">
                  "{siteData.company.tagline}"
                </p>
              </div>
            </div>

            {/* 3. LOWER POSITION ON MOBILE: Description + Landmark + Action Buttons */}
            <div className="order-3 text-left space-y-3.5 sm:space-y-4">
              {/* Narrative text */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light max-w-lg">
                {siteData.hero.description}
              </p>

              {/* Landmark Callout */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#12141C]/90 border border-white/10 backdrop-blur-sm max-w-lg">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300">
                  <span className="font-semibold text-white block">Prime Barasat Location:</span>
                  Arabindapally Vidyasagar Road, <span className="text-[#E5A93C] font-medium">opposite Anandabazar Gate No. 3</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] hover:from-[#FFF1A8] hover:to-[#CE8E25] rounded-xl shadow-xl shadow-[#E5A93C]/25 hover:shadow-[#E5A93C]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Reserve Table / Lounge</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide text-gray-200 hover:text-white bg-[#141720] hover:bg-[#1C202C] border border-[#E5A93C]/30 hover:border-[#E5A93C] rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Film className="w-4 h-4 text-[#E5A93C]" />
                  <span>Explore The Cafe</span>
                </a>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* 2. MIDDLE POSITION ON MOBILE, RIGHT COLUMN ON DESKTOP           */}
          {/* ============================================================== */}
          <div className="order-2 lg:col-span-7 w-full">
            <div className="relative rounded-2xl overflow-hidden cinema-border bg-[#0B0D13] shadow-2xl shadow-black/90 p-2 sm:p-2.5 group">
              
              {/* Main Image Stage */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-black cursor-pointer"
                onClick={() => onOpenImage && onOpenImage(activeSlide.image, activeSlide.title)}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                title="Click to view full screen"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <img
                      src={activeSlide.image}
                      alt={`${activeSlide.title} at Mafia Talkies Barasat Kolkata`}
                      className="w-full h-full object-cover enhanced-photo select-none"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Gradient Vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none z-10"></div>

                {/* Top Right Click to Enlarge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-[10px] text-white backdrop-blur-md flex items-center gap-1 hover:border-[#E5A93C] transition-colors z-20">
                  <Sparkles className="w-3 h-3 text-[#E5A93C]" />
                  <span>Enlarge</span>
                </div>

                {/* Scene Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left z-20 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel',serif] tracking-wide drop-shadow-md">
                        {activeSlide.title}
                      </h2>
                      <p className="text-xs text-gray-300 font-light drop-shadow line-clamp-1 mt-0.5">
                        {activeSlide.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Left / Right Nav Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-[#E5A93C] text-white hover:text-black border border-white/20 hover:border-[#E5A93C] transition-all shadow-lg cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-[#E5A93C] text-white hover:text-black border border-white/20 hover:border-[#E5A93C] transition-all shadow-lg cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* 2.5-Second Animated Laser Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30 overflow-hidden">
                  <motion.div
                    key={currentSlide}
                    initial={{ width: '0%' }}
                    animate={{ width: isPlaying ? '100%' : '0%' }}
                    transition={{ duration: 2.5, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#D92338]"
                  />
                </div>
              </div>

              {/* Minimal 3-Slide Indicator Bars (No lower image strip) */}
              <div className="flex items-center justify-center gap-2 pt-2.5 pb-1">
                {heroSlides.map((slide, idx) => {
                  const isCurrent = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => handleManualSelect(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? 'w-10 bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#B47313] shadow-md shadow-[#E5A93C]/40'
                          : 'w-3 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                      title={slide.title}
                    />
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
