import { useState } from 'react';
import { FALLBACK_IMAGE } from '../../pages/cities/common/cityConstants';

const CoWorkingOfficeCard = ({ space }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = space.images && space.images.length > 0 ? space.images : [FALLBACK_IMAGE];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group flex flex-col w-full transition-transform duration-300">
      {/* Image Carousel Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-xs">
        <img
          src={images[currentImageIndex]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMAGE;
          }}
          alt={`${space.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge: Popular / Premium */}
        {space.badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold shadow-md bg-white text-slate-800 border border-slate-100">
              <span className="text-amber-500 text-sm leading-none">👑</span>
              <span>{space.badge}</span>
            </span>
          </div>
        )}

        {/* Carousel Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:outline-none hover:bg-slate-50 active:scale-90"
            >
              <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:outline-none hover:bg-slate-50 active:scale-90"
            >
              <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Card Details Beneath Image */}
      <div className="pt-3 pb-1 flex flex-col justify-between flex-grow">
        <div>
          {/* Row 1: Title and Rating */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-[17px] font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 hover:text-[#007bff] transition-colors cursor-pointer">
              {space.name}
            </h3>
            {space.rating ? (
              <div className="flex items-center gap-1 shrink-0 text-slate-900 text-sm font-bold">
                <span className="text-amber-400 text-base leading-none">★</span>
                <span>{space.rating}</span>
              </div>
            ) : null}
          </div>

          {/* Row 2: Address */}
          <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-1 font-normal">
            {space.address}
          </p>
        </div>

        {/* Row 3: Price and Blue 'Get Quote' button */}
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-base sm:text-lg font-extrabold text-slate-900">{space.priceFormatted}</span>
            <span className="text-xs sm:text-sm text-slate-500 font-normal"> / month</span>
          </div>
          <button
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoWorkingOfficeCard;
