import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Film } from 'lucide-react';

const LightboxModal = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) => {
  const dialogRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentImage = images[currentIndex] || null;

  // Open / Close modal with native showModal() as required by modern web guidance
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        setZoomLevel(1);
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Fallback for browsers that do not yet support closedby="any" natively
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        if (event.target !== dialog) return;

        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;

        onClose();
      }
    };

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };

    dialog.addEventListener('click', handleBackdropClick);
    dialog.addEventListener('cancel', handleCancel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.removeEventListener('cancel', handleCancel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.6 : 1));
  };

  return (
    <dialog
      ref={dialogRef}
      // Declarative light-dismiss attribute as specified in modern web guidance
      closedby="any"
      aria-labelledby="dialogImageTitle"
      className="lightbox-dialog fixed inset-0 m-auto max-w-5xl w-[94vw] h-auto max-h-[92vh] p-0 bg-transparent rounded-2xl border-0 overflow-hidden outline-none z-50"
    >
      <div className="relative flex flex-col bg-[#0A0C11] border border-[#E5A93C]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#12141D] border-b border-white/10 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E5A93C]/15 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 id="dialogImageTitle" className="text-sm sm:text-base font-bold font-['Cinzel',serif] text-white">
                {currentImage.title || 'Mafia Talkies Gallery'}
              </h3>
              <span className="text-[11px] text-[#E5A93C] font-mono tracking-wider uppercase">
                {currentImage.category || 'Atmosphere'} &bull; Photo {currentIndex + 1} of {images.length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleZoom}
              className="p-2 rounded-lg bg-[#1B1E2B] hover:bg-[#25293A] text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label={zoomLevel === 1 ? 'Zoom In' : 'Zoom Out'}
              title="Toggle Zoom"
            >
              {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#D92338]/20 hover:bg-[#D92338]/40 border border-[#D92338]/40 text-[#FFA5A5] hover:text-white transition-colors cursor-pointer"
              aria-label="Close image lightbox"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Image Container with Zoom & Navigation */}
        <div className="relative flex-1 bg-black/90 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-[350px] max-h-[68vh]">
          
          {/* Previous Button */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 z-20 p-3 rounded-full bg-black/70 hover:bg-[#E5A93C] text-white hover:text-black border border-white/20 hover:border-[#E5A93C] transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Image */}
          <div
            className="w-full h-full flex items-center justify-center overflow-auto cursor-zoom-in"
            onClick={toggleZoom}
          >
            <img
              src={currentImage.src}
              alt={currentImage.caption || currentImage.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[62vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300 enhanced-photo"
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-[#E5A93C] text-white hover:text-black border border-white/20 hover:border-[#E5A93C] transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        {currentImage.caption && (
          <div className="px-6 py-4 bg-[#101219] border-t border-white/10 text-left">
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              {currentImage.caption}
            </p>
          </div>
        )}

      </div>
    </dialog>
  );
};

export default LightboxModal;
