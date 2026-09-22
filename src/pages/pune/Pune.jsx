import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { puneNeighborhoods, puneOfficeCards, morePuneOfficeCards, officeSolutions, perfectWorkspaceBanner } from './puneData.js';

/**
 * Individual Coworking Space Card with isolated multi-image sliding closure mechanism
 * Implements continuous infinite looping in the same slide direction.
 */
const OfficeCard = ({ space }) => {
  const hasMultipleImages = Boolean(space.images && space.images.length > 1);
  const extendedImages = hasMultipleImages
    ? [space.images[space.images.length - 1], ...space.images, space.images[0]]
    : space.images || [];

  const [currentIndex, setCurrentIndex] = useState(hasMultipleImages ? 1 : 0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
          setIsAnimating(false);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  const handlePrevImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isAnimating || !hasMultipleImages) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex((previousIndex) => previousIndex - 1);
  };

  const handleNextImage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isAnimating || !hasMultipleImages) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex((previousIndex) => previousIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (!hasMultipleImages) return;
    if (currentIndex === extendedImages.length - 1) {
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitionEnabled(false);
      setCurrentIndex(extendedImages.length - 2);
    } else {
      setIsAnimating(false);
    }
  };

  return (
    <article className="group bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden">
      {/* Media slider block */}
      <figure className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 select-none">
        {/* Absolute badge overlay */}
        {space.badge && (
          <div className="absolute top-2.5 left-2.5 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-slate-800 shadow-xs">
            <span className="text-amber-500 text-xs">👑</span>
            <span>{space.badge}</span>
          </div>
        )}

        {/* Sliding images container with continuous infinite looping */}
        <div
          className={`flex h-full w-full ${isTransitionEnabled ? 'transition-transform duration-300 ease-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((imageUrl, imageIndex) => {
            const displayIndex = hasMultipleImages
              ? (imageIndex === 0
                  ? space.images.length
                  : imageIndex === extendedImages.length - 1
                  ? 1
                  : imageIndex)
              : 1;

            return (
              <img
                key={`${space.id}-img-${imageIndex}`}
                src={imageUrl}
                alt={`${space.name} - ${space.location} workspace interior view ${displayIndex}`}
                loading="lazy"
                className="w-full h-full shrink-0 object-cover pointer-events-none"
              />
            );
          })}
        </div>

        {/* Absolute left and right overlay action navigation arrows on hover states */}
        {space.images && space.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label={`Previous image of ${space.name}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md focus:opacity-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              aria-label={`Next image of ${space.name}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md focus:opacity-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </figure>

      {/* Meta details layer */}
      <div className="p-3.5 flex flex-col justify-between flex-1 gap-2">
        <div>
          {/* Header Row: Office Name & Star Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">
              {space.name}
            </h3>
            {space.rating ? (
              <div className="flex items-center gap-1 shrink-0 text-xs font-bold text-amber-500">
                <span>★</span>
                <span className="text-slate-700 text-[11px]">{space.rating}</span>
              </div>
            ) : null}
          </div>

          {/* Area Subtitle */}
          <p className="text-xs text-slate-500 mt-0.5">
            {space.location}
          </p>
        </div>

        {/* Pricing & CTA Row */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-50 mt-1">
          <div className="text-xs text-slate-600">
            <span className="text-sm font-bold text-slate-900">{space.price}</span>
            <span className="text-[11px] text-slate-500 font-normal"> {space.period}</span>
          </div>
          <button
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 active:scale-95 text-white text-xs font-semibold px-3 py-1.5 rounded-[4px] shadow-2xs transition-all cursor-pointer"
          >
            {space.ctaText}
          </button>
        </div>
      </div>
    </article>
  );
};

/**
 * Main Pune Coworking Listings Page Container
 */
const Pune = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const displayedSpaces = selectedNeighborhood
    ? puneOfficeCards.filter(
        (space) => space.area.toLowerCase() === selectedNeighborhood.toLowerCase()
      )
    : puneOfficeCards;

  const displayedMoreSpaces = selectedNeighborhood
    ? morePuneOfficeCards.filter(
        (space) => space.area.toLowerCase() === selectedNeighborhood.toLowerCase()
      )
    : morePuneOfficeCards;

  return (
    <main className="w-full min-h-screen bg-[#fafbfc] px-4 py-4 sm:px-8 sm:py-6 lg:px-12 antialiased font-sans">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center gap-1.5 text-xs text-slate-500">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/coworking/pune" className="hover:text-blue-600 transition-colors">Coworking</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-800 font-medium" aria-current="page">Pune</li>
          <li aria-hidden="true">/</li>
        </ol>
      </nav>

      {/* Header Section: Title and Filter Controls */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Coworking Spaces In Pune
        </h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              aria-label="Filter by popular locations"
              className="text-xs text-slate-700 bg-white border border-slate-200 rounded px-3 py-1.5 pr-6 appearance-none shadow-2xs cursor-pointer focus:outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Popular Locations</option>
              {puneNeighborhoods.map((neighborhood) => (
                <option key={`opt-${neighborhood}`} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-slate-400" aria-hidden="true">
              ▼
            </span>
          </div>

          <div className="relative">
            <select
              aria-label="Filter by price range"
              className="text-xs text-slate-700 bg-white border border-slate-200 rounded px-3 py-1.5 pr-6 appearance-none shadow-2xs cursor-pointer focus:outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select Price</option>
              <option value="5000">Up to ₹5,000</option>
              <option value="10000">Up to ₹10,000</option>
              <option value="15000">₹10,000+</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-slate-400" aria-hidden="true">
              ▼
            </span>
          </div>
        </div>
      </header>

      {/* Section: 18 Neighborhood Filter Pills */}
      <section aria-label="Neighborhood filters" className="mb-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {puneNeighborhoods.map((neighborhood) => {
            const isSelected = selectedNeighborhood === neighborhood;
            return (
              <button
                type="button"
                key={neighborhood}
                onClick={() =>
                  setSelectedNeighborhood(isSelected ? null : neighborhood)
                }
                className={`text-[11px] sm:text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {neighborhood}
              </button>
            );
          })}
        </div>
      </section>

      {/* Section: Coworking Spaces Grid */}
      <section aria-label="Coworking spaces list">
        {displayedSpaces.length === 0 ? (
          <div className="py-12 text-center text-slate-500 text-sm">
            <p>No coworking spaces found for {selectedNeighborhood}.</p>
            <button
              type="button"
              onClick={() => setSelectedNeighborhood(null)}
              className="mt-2 text-xs text-blue-600 underline cursor-pointer"
            >
              Show all Pune spaces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedSpaces.map((space) => (
              <OfficeCard key={space.id} space={space} />
            ))}
          </div>
        )}
      </section>

      {/* Section: Find Your Perfect Office Solution */}
      <section aria-label="Office solutions" className="mt-8 sm:mt-12 bg-[#eaf4fb] rounded-2xl p-6 sm:p-8 lg:p-10 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Find Your Perfect Office Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {officeSolutions.map((solution) => (
            <article
              key={solution.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs border border-blue-50/50 flex flex-row items-stretch transition-shadow hover:shadow-md"
            >
              {/* Image side */}
              <div className="w-[45%] shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & CTA side */}
              <div className="w-[55%] p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    className="bg-[#007bff] hover:bg-blue-600 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-all w-fit cursor-pointer"
                  >
                    {solution.ctaText}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section: Additional Coworking Spaces Grid */}
      {displayedMoreSpaces.length > 0 && (
        <section aria-label="Additional coworking spaces list" className="mb-10 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedMoreSpaces.map((space) => (
              <OfficeCard key={space.id} space={space} />
            ))}
          </div>
        </section>
      )}

      {/* Section: Discover your perfect workspace banner */}
      <section
        aria-label="Discover perfect workspace"
        className="w-full rounded-2xl overflow-hidden mb-12 shadow-xs relative bg-cover bg-right bg-no-repeat min-h-[190px] sm:min-h-[220px] md:min-h-[250px] flex items-center border border-blue-100/60"
        style={{
          backgroundImage: `url(${perfectWorkspaceBanner.bgImage})`
        }}
      >
        {/* Soft light blue gradient overlay on left fading smoothly into photo on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf4fb] via-[#eaf4fb]/95 sm:via-[#eaf4fb]/85 to-transparent pointer-events-none"></div>

        <div className="relative z-10 px-6 sm:px-10 md:px-12 py-8 sm:py-10 max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">
            {perfectWorkspaceBanner.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed max-w-md">
            {perfectWorkspaceBanner.subtitle}
          </p>
          <button
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all w-fit cursor-pointer"
          >
            {perfectWorkspaceBanner.ctaText}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Pune;
