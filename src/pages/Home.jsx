import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import CinematicExperience from '../components/CinematicExperience';
import MenuHighlights from '../components/MenuHighlights';
import Gallery from '../components/Gallery';
import AtmosphereFeatures from '../components/AtmosphereFeatures';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import LightboxModal from '../components/LightboxModal';
import { siteData } from '../data/siteData';

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Open lightbox by finding matching image in siteData.gallery or fallback
  const handleOpenImage = (src, _title) => {
    const foundIndex = siteData.gallery.findIndex((img) => img.src === src);
    if (foundIndex !== -1) {
      setLightboxIndex(foundIndex);
    } else {
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  const handleOpenImageByIndex = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? siteData.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === siteData.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#E2E8F0] selection:bg-[#E5A93C] selection:text-black">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main id="main-content">
        <Hero onOpenImage={handleOpenImage} />
        <About onOpenImage={handleOpenImage} />
        <CinematicExperience onOpenImage={handleOpenImage} />
        <MenuHighlights />
        <Gallery onOpenImageByIndex={handleOpenImageByIndex} />
        <AtmosphereFeatures />
        <Location />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Phone - Icon Only, Stylish) */}
      <FloatingActionButtons />

      {/* Accessible Interactive Image Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={siteData.gallery}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Home;
