import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPuneOfficeCardById } from './puneData.js';

/**
 * Coworking Office Details Page
 * Displays multi-image gallery with hover-zoom and full-screen popup lightbox carousel.
 */
const OfficeDetail = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSpace(getPuneOfficeCardById(id));
  }, [id]);

  const images = space?.images || [];

  const openCarousel = (index = 0) => {
    setActiveImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => setIsCarouselOpen(false);

  const prevImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for carousel (Escape to close, Arrows to navigate)
  useEffect(() => {
    if (!isCarouselOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCarousel();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCarouselOpen, images.length]);

  if (!space) {
    return (
      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Office Space Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">The requested coworking space could not be found.</p>
        <Link
          to="/coworking/pune"
          className="bg-[#007bff] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-colors"
        >
          Back to Pune Coworking Spaces
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white pb-16 antialiased font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/coworking/pune" className="hover:text-blue-600 transition-colors">Coworking</Link></li>
            <li>/</li>
            <li className="text-slate-700 font-medium truncate">{space.name}</li>
          </ol>
        </nav>

        {/* Header: Office Title, Location & Price */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-2 border-b border-slate-100">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">{space.name}</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">{space.location}</p>
          </div>
          <div className="flex sm:flex-col sm:items-end justify-between items-center">
            <span className="text-xs text-slate-500 font-medium">Starting</span>
            <div className="text-lg sm:text-2xl font-extrabold text-[#007bff]">
              {space.price}<span className="text-xs sm:text-sm text-slate-600 font-normal"> / Month</span>
            </div>
          </div>
        </header>

        {/* Gallery Grid (Zoom-on-Hover) */}
        <section aria-label="Office image gallery" className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[420px] select-none">
          {/* 1. Large Left Image */}
          <div
            onClick={() => openCarousel(0)}
            className="group relative md:col-span-6 h-[250px] md:h-full rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={images[0]}
              alt={`${space.name} 1`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
          </div>

          {/* 2. Middle Stacked 2 Images */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-3 h-[160px] md:h-full">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                onClick={() => openCarousel(idx)}
                className="group relative h-full rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
              >
                <img
                  src={images[idx] || images[0]}
                  alt={`${space.name} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
            ))}
          </div>

          {/* 3. Right Tall Image with View All Photos Button */}
          <div
            onClick={() => openCarousel(3)}
            className="group relative md:col-span-3 h-[220px] md:h-full rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={images[3] || images[0]}
              alt={`${space.name} 4`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* View All Photos Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openCarousel(0);
              }}
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>📷</span>
              <span>View All Photos ({images.length})</span>
            </button>
          </div>
        </section>

        {/* Quick Highlights / CTA */}
        <section className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600">
            {space.badge && (
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-700 font-semibold text-xs border border-amber-200">
                👑 {space.badge}
              </span>
            )}
            {space.rating && (
              <span className="font-semibold text-slate-800">
                <span className="text-amber-500">★</span> {space.rating} / 5.0 Rating
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

      {/* Lightbox Modal Carousel (Popup on same screen) */}
      {isCarouselOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeCarousel}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none"
        >
          {/* Modal Header */}
          <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-20">
            <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/10 px-3 py-1 rounded-full">
              {activeImageIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={closeCarousel}
              aria-label="Close carousel"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-lg cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Modal Center: Active Image & Left/Right Arrows */}
          <div onClick={(e) => e.stopPropagation()} className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-2">
            {images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
              >
                ‹
              </button>
            )}

            <img
              src={images[activeImageIndex]}
              alt={`${space.name} photo ${activeImageIndex + 1}`}
              className="max-h-[74vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
              >
                ›
              </button>
            )}
          </div>

          {/* Modal Bottom: Thumbnail Strip */}
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl mx-auto z-20 overflow-x-auto py-2 flex items-center justify-center gap-2">
            {images.map((imgUrl, idx) => (
              <button
                key={`thumb-${idx}`}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`shrink-0 w-14 h-10 rounded-md overflow-hidden transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'ring-2 ring-[#007bff] scale-105 opacity-100' : 'opacity-50 hover:opacity-85'
                }`}
              >
                <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default OfficeDetail;
