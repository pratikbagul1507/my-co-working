import { useState, useMemo, useRef, useEffect } from 'react';
import { priceFilterOptions } from './common/cityConstants';
import CoWorkingOfficeCard from '../../components/city/CoWorkingOfficeCard';

const CityPageLayout = ({ cityName, areas = ['All'], spaces = [] }) => {
  // Filters state
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);

  const locationMenuRef = useRef(null);
  const priceMenuRef = useRef(null);

  // Reset filters whenever city changes
  useEffect(() => {
    setSelectedArea('All');
    setSelectedPrice('all');
  }, [cityName]);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationMenuRef.current && !locationMenuRef.current.contains(event.target)) {
        setIsLocationMenuOpen(false);
      }
      if (priceMenuRef.current && !priceMenuRef.current.contains(event.target)) {
        setIsPriceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered spaces logic
  const filteredSpaces = useMemo(() => {
    return spaces.filter((space) => {
      // Area match
      const matchesArea =
        selectedArea === 'All' ||
        (space.area && space.area.toLowerCase().includes(selectedArea.toLowerCase())) ||
        (space.address && space.address.toLowerCase().includes(selectedArea.toLowerCase()));

      // Price match
      const priceOption = priceFilterOptions.find((p) => p.value === selectedPrice);
      let matchesPrice = true;
      if (priceOption) {
        if (priceOption.min !== undefined && space.price < priceOption.min) {
          matchesPrice = false;
        }
        if (priceOption.max !== undefined && space.price > priceOption.max) {
          matchesPrice = false;
        }
      }

      return matchesArea && matchesPrice;
    });
  }, [spaces, selectedArea, selectedPrice]);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 pb-20 select-none">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Coworking Space In {cityName}
          </h1>

          {/* Top Dropdowns */}
          <div className="flex items-center gap-3">
            {/* Popular Locations Dropdown */}
            <div className="relative" ref={locationMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setIsLocationMenuOpen((prev) => !prev);
                  setIsPriceMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <span>{selectedArea === 'All' ? 'Popular Locations' : selectedArea}</span>
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLocationMenuOpen && (
                <div className="absolute right-0 mt-1 w-56 max-h-64 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-30 py-1.5 text-xs sm:text-sm">
                  {areas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => {
                        setSelectedArea(area);
                        setIsLocationMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 cursor-pointer transition-colors ${
                        selectedArea === area ? 'font-bold text-[#007bff] bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Select Price Dropdown */}
            <div className="relative" ref={priceMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setIsPriceMenuOpen((prev) => !prev);
                  setIsLocationMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <span>
                  {priceFilterOptions.find((p) => p.value === selectedPrice)?.label || 'Select Price'}
                </span>
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isPriceMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-30 py-1.5 text-xs sm:text-sm">
                  {priceFilterOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSelectedPrice(option.value);
                        setIsPriceMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 cursor-pointer transition-colors ${
                        selectedPrice === option.value ? 'font-bold text-[#007bff] bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sub-Area Pills Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {areas.map((area) => {
            const isActive = selectedArea === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'border-[#007bff] bg-blue-50 text-[#007bff] font-semibold shadow-2xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {area}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        {filteredSpaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSpaces.map((space) => (
              <CoWorkingOfficeCard key={space.id} space={space} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-2xs">
            <p className="text-base font-semibold text-slate-700 mb-2">
              No spaces found matching your filter criteria.
            </p>
            <p className="text-xs text-slate-500 mb-6">
              Try choosing another location or reset your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedArea('All');
                setSelectedPrice('all');
              }}
              className="bg-[#007bff] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Floating Call Action Button */}
      <a
        href="tel:+919028760011"
        aria-label="Contact Workspace Expert"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.18)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.25)] hover:scale-105 active:scale-95 flex items-center justify-center text-[#007bff] transition-all duration-200 cursor-pointer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
};

export default CityPageLayout;
