import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPuneOfficeCardById } from './puneData.js';

/**
 * OfficeDetail Component
 * Displays individual coworking space detail page with:
 * - Breadcrumb navigation
 * - Header with office name, location, and starting price
 * - Multi-image gallery with zoom-on-hover effect matching reference design
 * - Full-screen popup lightbox carousel with previous/next arrows and thumbnail strip
 */
const OfficeDetail = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundSpace = getPuneOfficeCardById(id);
    setSpace(foundSpace);
  }, [id]);

  const images = space?.images && space.images.length > 0 ? space.images : [];

  const handleOpenCarousel = (index = 0) => {
    setActiveImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleCloseCarousel = useCallback(() => {
    setIsCarouselOpen(false);
  }, []);

  const handlePrevImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );

  const handleNextImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
  );

  // Keyboard navigation for carousel modal (Esc to close, Arrow keys to switch)
  useEffect(() => {
    if (!isCarouselOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseCarousel();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCarouselOpen, handleCloseCarousel, handlePrevImage, handleNextImage]);

  // Share button action
  const handleShare = async (e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: space?.name,
          text: `Check out ${space?.name} coworking space in ${space?.location}`,
          url: window.location.href
        });
      } catch {
        // Ignored if user dismissed share dialog
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Page link copied to clipboard!');
    }
  };

  if (!space) {
    return (
      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Office Space Not Found</h1>
        <p className="text-sm text-slate-500 mb-6 max-w-md">
          The requested coworking space could not be found or has been moved.
        </p>
        <Link
          to="/coworking/pune"
          className="bg-[#007bff] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-colors"
        >
          Back to Pune Coworking Spaces
        </Link>
      </main>
    );
  }

  // Assign images to layout slots
  const primaryImg = images[0] || '';
  const topMiddleImg = images[1] || images[0] || '';
  const bottomMiddleImg = images[2] || images[1] || images[0] || '';
  const rightImg = images[3] || images[2] || images[0] || '';

  return (
    <main className="w-full min-h-screen bg-white pb-16 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/coworking/pune" className="hover:text-blue-600 transition-colors">
                Coworking
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-none">
              {space.name}
            </li>
          </ol>
        </nav>

        {/* Header: Office Title, Location & Starting Price */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {space.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              {space.location}
            </p>
          </div>

          <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center items-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
              Starting
            </span>
            <div className="text-lg sm:text-2xl font-extrabold text-[#007bff]">
              {space.price}
              <span className="text-xs sm:text-sm text-slate-600 font-normal">
                /* month
              </span>
            </div>
          </div>
        </header>

        {/* ==================================================================== */}
        {/* Responsive Image Gallery Grid with Smooth Hover-Zoom Effect         */}
        {/* Layout matching reference screenshot:                              */}
        {/* - Left: 1 Large Image                                                */}
        {/* - Middle: 2 Stacked Images                                          */}
        {/* - Right: 1 Tall Image with Share & View All Photos button           */}
        {/* ==================================================================== */}
        <section
          aria-label="Coworking space image gallery"
          className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3.5 h-auto md:h-[400px] lg:h-[450px] select-none"
        >
          {/* 1. Left Large Prominent Image */}
          <div
            onClick={() => handleOpenCarousel(0)}
            className="group relative md:col-span-6 h-[250px] md:h-full rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={primaryImg}
              alt={`${space.name} main view`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 2. Middle Stacked Two Images */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-3.5 h-[160px] md:h-full">
            {/* Top Middle Image */}
            <div
              onClick={() => handleOpenCarousel(1)}
              className="group relative h-full rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
            >
              <img
                src={topMiddleImg}
                alt={`${space.name} workspace view 2`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Bottom Middle Image */}
            <div
              onClick={() => handleOpenCarousel(2)}
              className="group relative h-full rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
            >
              <img
                src={bottomMiddleImg}
                alt={`${space.name} workspace view 3`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
          </div>

          {/* 3. Right Tall Image with Share & View All Photos */}
          <div
            onClick={() => handleOpenCarousel(3)}
            className="group relative md:col-span-3 h-[220px] md:h-full rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={rightImg}
              alt={`${space.name} workspace view 4`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

            {/* Share Button (Top Right) */}
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share this space"
              className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-md backdrop-blur-xs transition-transform active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>

            {/* View All Photos Button (Bottom Right) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenCarousel(0);
              }}
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <circle cx="12" cy="13" r="3" strokeWidth={2} />
              </svg>
              <span>View All Photos</span>
            </button>
          </div>
        </section>

        {/* Quick Highlights / Overview section below gallery */}
        <section className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600">
            {space.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 text-amber-700 font-semibold text-xs border border-amber-200">
                <span>👑</span>
                <span>{space.badge}</span>
              </span>
            )}
            {space.rating && (
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span className="text-amber-500">★</span>
                <span>{space.rating} / 5.0 Rating</span>
              </span>
            )}
            <span className="text-slate-400">•</span>
            <span>Verified Coworking Space</span>
          </div>

          <button
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow-xs transition-all cursor-pointer"
          >
            {space.ctaText || 'Get Quote'}
          </button>
        </section>
      </div>

      {/* ==================================================================== */}
      {/* Lightbox Modal Carousel (Pop-up on the same screen)                  */}
      {/* ==================================================================== */}
      {isCarouselOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={handleCloseCarousel}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 transition-all duration-300"
        >
          {/* Modal Top Bar: Photo Counter & Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-20"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/10 px-3 py-1 rounded-full">
                {activeImageIndex + 1} / {images.length}
              </span>
              <span className="hidden sm:inline text-xs text-white/70 truncate max-w-sm">
                {space.name}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseCarousel}
              aria-label="Close photo carousel"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Center Area: Main Displayed Image with Left & Right Arrows */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-2 select-none"
          >
            {/* Left Navigation Arrow */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Currently Active Large Image */}
            <div className="relative max-h-[72vh] sm:max-h-[76vh] max-w-[92vw] overflow-hidden rounded-xl shadow-2xl">
              <img
                src={images[activeImageIndex]}
                alt={`${space.name} photo ${activeImageIndex + 1}`}
                className="max-h-[72vh] sm:max-h-[76vh] max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Right Navigation Arrow */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Modal Bottom Area: Interactive Thumbnail Strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl mx-auto z-20 overflow-x-auto py-2 flex items-center justify-center gap-2 sm:gap-3 scrollbar-none"
          >
            {images.map((imgUrl, idx) => (
              <button
                key={`thumb-${idx}`}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`Jump to photo ${idx + 1}`}
                className={`shrink-0 w-12 h-9 sm:w-16 sm:h-11 rounded-md overflow-hidden transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'ring-2 ring-[#007bff] scale-105 opacity-100'
                    : 'opacity-50 hover:opacity-85'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default OfficeDetail;
