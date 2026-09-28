import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CityGrid from '../components/city/CityGrid';
import CityPopup from '../components/city/CityPopup';

// ============================================================================
// DATA STORE IMPORT
// All Homepage content, copy, statistics, images, and form configs are centralized
// in src/home/images/homedata.js.
// ============================================================================
import {
  cityNames as availableCities,
  spaceOptions as availableSpaceTypes,
  heroSectionData,
  enquiryFormConfig,
  perkIconSvgPaths,
  homePromotionalData,
  platformShowcaseData,
  trustedCompaniesData,
  topCoworkingCitiesData,
  whyChooseData
} from './images/homedata.js';

/**
 * ============================================================================
 * HOMEPAGE COMPONENT
 * ============================================================================
 * Main landing page for the coworking and flexible workspace platform.
 *
 * Page Structure:
 *  1. Hero Fold:
 *     - Left Column: Search filters, category selectors, and 18-city circular grid.
 *     - Right Column: Hero banner with platform statistics & lead enquiry contact form.
 *  2. Promotional Banner Section:
 *     - Category Cards: Coworking Spaces & Coliving Spaces.
 *     - Center Card: "List Free with Cofynd" banner with verified perks.
 *     - Category Cards: Virtual Offices & Office Spaces.
 *  3. India's #1 Online Platform Showcase:
 *     - Overlapping property showcase cards & live metrics.
 *  4. Trusted Companies Carousel:
 *     - Auto-scrolling logo carousel (3-second interval, hover-pause).
 *  5. Top Coworking Spaces in India:
 *     - 18-City workspace grid with verified images and local city taglines.
 *  6. Why Choose Us (ANAROCK):
 *     - 6 key value propositions on royal blue background.
 *  7. City Popup Dialog:
 *     - Modal dialog for choosing between Coworking and Virtual Offices.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// HELPER: Renders vector SVG icons for "Why choose mycoworking" features
// ----------------------------------------------------------------------------
const renderWhyChooseIcon = (iconType) => {
  switch (iconType) {
    case 'brokerage':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="16" cy="16" r="13" />
          <line x1="7" y1="7" x2="25" y2="25" />
          <path d="M12.5 11.5h6.5M12.5 14.5h5.5M12.5 11.5v6.5M15.5 14.5c1.4 0 2.5-.7 2.5-1.8s-1.1-1.7-2.5-1.7M14.5 18l3.5 4" strokeWidth="1.6" />
        </svg>
      );
    case 'turnaround':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="16" cy="16" r="13" />
          <path d="M12 11h8M12 21h8M13 11c0 3 3 4.5 3 5s-3 2-3 5M19 11c0 3-3 4.5-3 5s3 2 3 5" />
          <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'network':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 11l6.5-3 7 3 7.5-3v15l-7.5 3-7-3L5 26V11z" />
          <path d="M11.5 8v15M18.5 11v15" />
          <circle cx="9" cy="7" r="2.5" />
          <path d="M9 9.5v2" />
        </svg>
      );
    case 'consultant':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="11" r="4.5" />
          <path d="M5 25c0-4 3.2-7 7-7 1.5 0 2.8.5 3.8 1.3" />
          <circle cx="22" cy="20" r="5" />
          <path d="M22 17.5l.8 1.5 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3.8-1.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'ethics':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18.5 14l3.5-3.5a2.5 2.5 0 0 1 3.5 3.5L22 17.5" />
          <path d="M13.5 14l-3.5-3.5a2.5 2.5 0 0 0-3.5 3.5L10 17.5" />
          <path d="M11.5 15.5l4 4a2 2 0 0 0 2.8 0l3.7-3.7" />
          <path d="M8.5 18.5l3.5 3.5a3 3 0 0 0 4.2 0L20 18.2" />
          <path d="M5.5 21.5l3 3a4 4 0 0 0 5.6 0L17 21.7" />
        </svg>
      );
    case 'design':
      return (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="6" width="22" height="20" rx="2.5" />
          <line x1="16" y1="6" x2="16" y2="26" />
          <line x1="16" y1="16" x2="27" y2="16" />
          <line x1="5" y1="16" x2="16" y2="16" />
        </svg>
      );
    default:
      return null;
  }
};

const Homepage = () => {
  const navigate = useNavigate();

  // =========================================================================
  // 1. APPLICATION STATE (Initialized with centralized config defaults)
  // =========================================================================

  // Tracks the workspace category chosen in the hero quick search (e.g., "Coworking Spaces")
  const [selectedSpaceType, setSelectedSpaceType] = useState(availableSpaceTypes[0]);

  // Tracks the name of the currently selected city (defaults to 'Pune' from config)
  const [selectedCityName, setSelectedCityName] = useState(enquiryFormConfig.defaultValues.city);

  // Stores contact and enquiry form inputs entered by the user
  const [enquiryFormData, setEnquiryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: '',
    city: ''
  });

  // Flags for enquiry form submission confirmation banner
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMessageFading, setIsMessageFading] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const fadeTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  // Clean up timers on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Holds the city object currently being viewed in the popup modal (null when closed)
  const [openedCityForPopup, setOpenedCityForPopup] = useState(null);

  // State for "Trusted by more than 500+ Companies" carousel
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const [isCompanySliderPaused, setIsCompanySliderPaused] = useState(false);
  const [visibleCompanyCardsCount, setVisibleCompanyCardsCount] = useState(6);
  const totalCompanies = trustedCompaniesData.companies.length;

  // Responsive visible cards count for exact alignment across screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCompanyCardsCount(2);
      } else if (window.innerWidth < 768) {
        setVisibleCompanyCardsCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCompanyCardsCount(4);
      } else {
        setVisibleCompanyCardsCount(6);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Moves company cards smoothly every 3 seconds (customizable in homedata.js)
  useEffect(() => {
    if (isCompanySliderPaused) return;
    const intervalTime = trustedCompaniesData.autoScrollIntervalMs || 3000;
    const autoScrollTimer = setInterval(() => {
      setCurrentCompanyIndex((previous) => (previous + 1) % totalCompanies);
    }, intervalTime);
    return () => clearInterval(autoScrollTimer);
  }, [isCompanySliderPaused, totalCompanies]);

  const handleNextCompanySlide = () => {
    setCurrentCompanyIndex((previous) => (previous + 1) % totalCompanies);
  };

  const handlePrevCompanySlide = () => {
    setCurrentCompanyIndex((previous) => (previous === 0 ? totalCompanies - 1 : previous - 1));
  };

  // =========================================================================
  // 2. USER INTERACTION & LEAD ENQUIRY FORM HANDLERS
  // =========================================================================

  /**
   * Updates enquiry form field values as the user types into inputs,
   * and clears previous submission confirmation.
   */
  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    setEnquiryFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
    if (isFormSubmitted) {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setIsFormSubmitted(false);
      setIsMessageFading(false);
    }
  };

  /**
   * Handles lead enquiry form submission:
   * - Prepares email to support team using enquiryFormConfig.contactEmail
   * - Shows confirmation banner and smoothly fades out after 3 seconds
   * - Resets the form fields cleanly
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const clientName = enquiryFormData.name;
    const clientEmail = enquiryFormData.email;
    const clientPhone = enquiryFormData.phone;
    const targetSpaceType = enquiryFormData.spaceType || selectedSpaceType || enquiryFormConfig.defaultValues.spaceType;
    const targetCity = enquiryFormData.city || selectedCityName || enquiryFormConfig.defaultValues.countryFallback;

    // Show confirmation message with submitted user's name
    setSubmittedName(clientName);
    setIsFormSubmitted(true);
    setIsMessageFading(false);

    // Clear any existing timer
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    // Smoothly hide message box after configured duration
    const displayMs = enquiryFormConfig.feedback?.displayDurationMs || 3000;
    const fadeMs = enquiryFormConfig.feedback?.fadeTransitionMs || 500;

    fadeTimerRef.current = setTimeout(() => {
      setIsMessageFading(true);
      hideTimerRef.current = setTimeout(() => {
        setIsFormSubmitted(false);
        setIsMessageFading(false);
      }, fadeMs);
    }, displayMs);

    // Construct email subject and body, and trigger user's default email client
    const subject = encodeURIComponent(`Workspace Enquiry - ${targetSpaceType} in ${targetCity}`);
    const body = encodeURIComponent(
      `New Workspace Enquiry:\n\n` +
      `Client Name: ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Phone: ${clientPhone}\n` +
      `Type of Space: ${targetSpaceType}\n` +
      `City: ${targetCity}\n` +
      `Submission Date: ${new Date().toLocaleString()}\n`
    );
    window.location.href = `mailto:${enquiryFormConfig.contactEmail}?subject=${subject}&body=${body}`;

    // Reset form fields cleanly
    setEnquiryFormData({
      name: '',
      email: '',
      phone: '',
      spaceType: '',
      city: ''
    });
  };

  /**
   * Selects a city, syncs the enquiry form city field, and optionally opens its popup modal.
   * 
   * @param {Object} city - Selected city object containing name and image
   * @param {boolean} openModal - Whether to trigger the space options popup
   */
  const selectCityAndOpenPopup = (city, openModal = false) => {
    setSelectedCityName(city.name);
    setEnquiryFormData((previousData) => ({
      ...previousData,
      city: city.name
    }));
    if (openModal) {
      setOpenedCityForPopup(city);
    }
  };

  /**
   * Updates the chosen workspace type (e.g., Coworking Spaces or Virtual Office).
   */
  const selectSpaceType = (spaceType) => {
    setSelectedSpaceType(spaceType);
    setEnquiryFormData((previousData) => ({
      ...previousData,
      spaceType
    }));
  };

  /**
   * Handles city selection from the native "Select City" HTML dropdown.
   */
  const handleCityDropdownChange = (event, openModal = false) => {
    const matchedCity = availableCities.find((city) => city.name === event.target.value);
    if (matchedCity) {
      selectCityAndOpenPopup(matchedCity, openModal);
    }
  };

  /**
   * Closes the city options popup modal.
   */
  const closeCityPopup = () => {
    setOpenedCityForPopup(null);
  };

  /**
   * Handles space type selection from within the popup dialog,
   * closes the popup, and navigates to the city's coworking listing if applicable.
   */
  const handleSpaceSelectionFromPopup = (chosenSpaceType, city) => {
    selectSpaceType(chosenSpaceType);
    closeCityPopup();
    if (chosenSpaceType === 'Coworking Spaces') {
      navigate(`/coworking/${city.name.toLowerCase()}`);
    }
  };

  /**
   * Handles click on category promo cards (Coworking, Coliving, Virtual Office, Office Spaces).
   */
  const handleCategoryCardClick = (card) => {
    if (card.id === 'coworking-spaces') {
      navigate(`/coworking/${selectedCityName.toLowerCase()}`);
    } else if (card.type) {
      selectSpaceType(card.type);
      selectCityAndOpenPopup(availableCities.find((c) => c.name === selectedCityName) || availableCities[0], true);
    }
  };

  /**
   * Reusable category card renderer to eliminate duplicate card markup
   */
  const renderPromoCard = (card) => (
    <article
      key={card.id}
      onClick={() => handleCategoryCardClick(card)}
      className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer flex items-center justify-between min-h-[140px] sm:min-h-[148px] h-full"
    >
      <div className="absolute inset-y-0 left-0 w-[58%] overflow-hidden bg-slate-100">
        <img
          src={card.image}
          alt={`${card.titlePart1} ${card.titlePart2}`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
      <div className="relative z-10 pr-5 sm:pr-6 text-right ml-auto flex flex-col justify-center select-none">
        <span className="text-lg sm:text-xl lg:text-[22px] font-light text-slate-600 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
          {card.titlePart1}
        </span>
        <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 tracking-tight leading-tight">
          {card.titlePart2}
        </span>
      </div>
    </article>
  );

  /**
   * Renders pixel-accurate vector logos for companies in the trusted partner slider
   */
  const renderCompanyLogo = (company) => {
    switch (company.type) {
      case 'tribe':
        return (
          <div className="flex flex-col items-center justify-center">
            <svg className="w-18 sm:w-20 h-3.5 sm:h-4 text-slate-900" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M 5,14 C 7,4 17,4 18,11 C 19,17 11,18 13,11 C 15,4 25,4 26,11 C 27,17 19,18 21,11 C 23,4 33,4 34,11 C 35,17 27,18 29,11 C 31,4 41,4 42,11 C 43,17 35,18 37,11 C 39,4 49,4 50,11 C 51,17 43,18 45,11 C 47,4 57,4 58,11" />
            </svg>
            <span className="tracking-[0.45em] text-[11px] sm:text-[12px] font-bold text-slate-900 uppercase pl-1 mt-0.5">
              TRIBE
            </span>
          </div>
        );

      case 'covie':
        return (
          <div className="flex flex-col items-center justify-center w-full px-1">
            <span className="text-[16px] sm:text-[18px] font-light tracking-[0.2em] text-slate-900 leading-none">
              COVIE
            </span>
            <div className="flex items-center gap-1.5 w-full max-w-[84px] mt-1">
              <span className="h-[1px] bg-slate-300 flex-1" />
              <span className="text-[7.5px] tracking-[0.2em] text-slate-500 font-sans lowercase">
                coliving
              </span>
              <span className="h-[1px] bg-slate-300 flex-1" />
            </div>
          </div>
        );

      case 'helloworld':
        return (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center shrink-0 p-1">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 13 A 6 6 0 0 1 18 13" strokeLinecap="round" />
                <path d="M8 15 A 4 4 0 0 1 16 15" strokeLinecap="round" />
                <path d="M12 15 v 4 M9 16 v 3 M15 16 v 3" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-[0.9] font-black text-slate-900 text-[11px] sm:text-[12px] tracking-tight">
              <span>hello</span>
              <span>world</span>
            </div>
          </div>
        );

      case 'isthara':
        return (
          <div className="flex items-center justify-center">
            <svg className="w-3.5 h-5.5 mr-1 shrink-0" viewBox="0 0 12 24">
              <rect x="1" y="1" width="10" height="4" fill="#a855f7" rx="0.5" />
              <rect x="1" y="6" width="10" height="4" fill="#ec4899" rx="0.5" />
              <rect x="1" y="11" width="10" height="4" fill="#06b6d4" rx="0.5" />
              <rect x="1" y="16" width="10" height="4" fill="#84cc16" rx="0.5" />
              <rect x="1" y="21" width="10" height="3" fill="#eab308" rx="0.5" />
            </svg>
            <span className="text-[16px] sm:text-[18px] font-black text-[#002f54] tracking-tight">
              STHARA
            </span>
          </div>
        );

      case 'yourspace':
        return (
          <div className="flex items-center justify-center gap-1.5">
            <svg className="w-4.5 h-4.5 text-[#f95700] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="4.5" />
              <polygon points="19,1 14,9 24,9" />
              <rect x="15" y="14" width="8" height="8" rx="1" />
              <path d="M5 13 v9 M0.5 17.5 h9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col text-left leading-[0.95] font-black text-[#f95700] text-[11px] sm:text-[12px] tracking-tight">
              <span>your</span>
              <span>space</span>
            </div>
          </div>
        );

      case 'settl':
        return (
          <div className="flex items-center justify-center gap-1.5">
            <svg className="w-4.5 h-4.5 text-[#e11d48] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
              <rect x="3" y="7" width="13" height="13" rx="2.5" />
              <rect x="8" y="3" width="13" height="13" rx="2.5" />
            </svg>
            <span className="text-[16px] sm:text-[18px] font-extrabold text-slate-900 tracking-tight">
              Settl.
            </span>
          </div>
        );

      case 'awfis':
        return (
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]" />
            <span className="text-[16px] sm:text-[17px] font-black text-slate-800 tracking-tight lowercase">
              awfis
            </span>
          </div>
        );

      case 'innov8':
        return (
          <span className="text-[16px] sm:text-[17px] font-black text-slate-900 tracking-tight">
            INNOV<span className="text-red-600">8</span>
          </span>
        );

      case 'springboard':
        return (
          <span className="text-[14px] sm:text-[15px] font-black text-amber-500 tracking-tight">
            91<span className="text-slate-800 font-bold">springboard</span>
          </span>
        );

      case 'indiqube':
        return (
          <span className="text-[15px] sm:text-[16px] font-bold text-[#0d9488] tracking-tight">
            Indi<span className="text-slate-900 font-black">Qube</span>
          </span>
        );

      case 'wework':
        return (
          <span className="text-[17px] sm:text-[19px] font-serif font-black text-slate-900 tracking-tight lowercase">
            wework
          </span>
        );

      case 'smartworks':
        return (
          <span className="text-[14px] sm:text-[15px] font-sans font-extrabold text-slate-800 tracking-tight">
            smart<span className="text-blue-600 font-black">works</span>
          </span>
        );

      default:
        return (
          <span className="text-sm font-bold text-slate-800">
            {company.name}
          </span>
        );
    }
  };

  // =========================================================================
  // 3. UI RENDERING (Mapped dynamically from centralized homedata store)
  // =========================================================================
  return (
    <main className="w-full min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] overflow-x-hidden bg-[#f8fafc] flex flex-col antialiased font-sans select-none">
      
      {/* =================================================================== */}
      {/* SECTION 1: PRIMARY HERO FOLD (LEFT SEARCH & RIGHT ENQUIRY FORM)    */}
      {/* =================================================================== */}
      <div className="w-full h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] min-h-[560px] flex flex-col md:flex-row overflow-hidden shrink-0">
        
        {/* ----------------------------------------------------------------- */}
        {/* LEFT COLUMN: Heading, Filter Dropdowns, Search Button, Cities Grid */}
        {/* Data Source: heroSectionData & availableCities from homedata.js    */}
        {/* ----------------------------------------------------------------- */}
        <section className="w-full md:w-1/2 h-full px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col">
            {/* Decorative Brand Accent Dot */}
            <div className="w-7 h-7 bg-amber-400 rounded-full mb-2 sm:mb-2.5 shadow-[5px_5px_0_#0f172a]"></div>
            
            {/* Tagline from heroSectionData */}
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-1 sm:mb-1.5">
              {heroSectionData.tagline}
            </p>
            
            {/* Main Headline from heroSectionData */}
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-slate-900 tracking-tight mb-2.5 sm:mb-3 leading-[1.12]">
              {heroSectionData.headline.prefix} <span className="text-[#007bff]">{heroSectionData.headline.highlight1}</span><br />
              {heroSectionData.headline.middleText} <span className="text-[#007bff]">{heroSectionData.headline.highlight2}</span>
            </h1>

            {/* Quick Search Filter Dropdowns */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 max-w-xl">
              {/* Space Type Selector Dropdown */}
              <label className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-col bg-white shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">
                  {heroSectionData.searchFilters.lookingForLabel}
                </span>
                <select 
                  value={selectedSpaceType} 
                  onChange={(event) => selectSpaceType(event.target.value)}
                  className="text-xs sm:text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  {availableSpaceTypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              
              {/* City Selector Dropdown */}
              <label className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-col bg-white shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">
                  {heroSectionData.searchFilters.selectCityLabel}
                </span>
                <select 
                  value={selectedCityName} 
                  onChange={handleCityDropdownChange}
                  className="text-xs sm:text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  {availableCities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* Primary Search Button */}
            <button 
              type="button" 
              onClick={() => {
                if (selectedSpaceType === 'Coworking Spaces') {
                  navigate(`/coworking/${selectedCityName.toLowerCase()}`);
                } else {
                  selectCityAndOpenPopup(availableCities.find((city) => city.name === selectedCityName), true);
                }
              }} 
              className="w-fit bg-[#007bff] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1.5 transition-colors mb-2.5 sm:mb-3 shadow-xs cursor-pointer active:scale-95"
            >
              {heroSectionData.searchFilters.searchButtonText} <span aria-hidden="true">{heroSectionData.searchFilters.searchButtonArrow}</span>
            </button>
          </div>
          
          {/* 18-City Circular Selection Grid */}
          <CityGrid 
            cities={availableCities} 
            selectedCity={selectedCityName} 
            onCitySelect={(city) => selectCityAndOpenPopup(city, true)} 
          />
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* RIGHT COLUMN: Hero Background, Statistics & Lead Enquiry Form     */}
        {/* Data Source: heroSectionData & enquiryFormConfig from homedata.js */}
        {/* ----------------------------------------------------------------- */}
        <section 
          className="w-full md:w-1/2 h-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 py-4 sm:px-6 lg:px-10 overflow-hidden" 
          style={{ backgroundImage: `url(${heroSectionData.backgroundImage})` }}
        >
          {/* Subtle Dark Image Overlay */}
          <div className="absolute inset-0 bg-slate-950/25"></div>

          {/* Workspace Statistics Header (Mapped from heroSectionData.statistics) */}
          <div className="relative z-10 flex items-center justify-center gap-5 sm:gap-8 text-white text-center mb-3 sm:mb-4 drop-shadow-md">
            {heroSectionData.statistics.map((stat, index) => (
              <div key={stat.id} className="flex items-center">
                {index > 0 && <div className="w-px h-10 sm:h-12 bg-white/70 self-center mr-5 sm:mr-8" />}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-tight">
                    {stat.count}
                  </h2>
                  <p className="text-xs sm:text-base font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lead Enquiry Contact Form (Configured via enquiryFormConfig) */}
          <form onSubmit={handleFormSubmit} className="w-full max-w-[400px] sm:max-w-[430px] relative z-10 flex flex-col gap-2 sm:gap-2.5">
            {/* Form Row 1: Name Input */}
            <input 
              type="text" 
              name="name" 
              placeholder={enquiryFormConfig.placeholders.name} 
              value={enquiryFormData.name} 
              onChange={handleFormFieldChange} 
              required 
              className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
            />
            
            {/* Form Row 2: Email & Phone Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <input 
                type="email" 
                name="email" 
                placeholder={enquiryFormConfig.placeholders.email} 
                value={enquiryFormData.email} 
                onChange={handleFormFieldChange} 
                required 
                className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
              />
              
              {/* Phone Input with Country Flag Indicator */}
              <div className="flex items-center w-full h-9 sm:h-10 bg-white border border-[#cfd4d9] rounded-[3px] px-2.5 shadow-xs focus-within:border-[#007bff] focus-within:ring-1 focus-within:ring-[#007bff]">
                <div className="flex items-center gap-1 pr-1.5 select-none shrink-0 cursor-pointer border-r border-slate-200">
                  <svg className="w-4 h-3 rounded-[1px] shadow-xs" viewBox="0 0 24 16">
                    <rect width="24" height="5.33" fill="#FF9933" />
                    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                    <rect y="10.66" width="24" height="5.34" fill="#128807" />
                    <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
                    <circle cx="12" cy="8" r="0.6" fill="#000080" />
                  </svg>
                  <span className="text-[9px] text-slate-500">▼</span>
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder={enquiryFormConfig.placeholders.phone} 
                  value={enquiryFormData.phone} 
                  onChange={handleFormFieldChange} 
                  required 
                  className="w-full h-full bg-transparent text-slate-800 placeholder-[#75848a] text-xs sm:text-sm pl-2 focus:outline-none" 
                />
              </div>
            </div>
            
            {/* Form Row 3: Space Type Selector & City Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div className="relative w-full">
                <select 
                  name="spaceType" 
                  value={enquiryFormData.spaceType} 
                  onChange={(event) => selectSpaceType(event.target.value)}
                  className="w-full h-9 sm:h-10 bg-white text-slate-800 text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 pr-7 focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff] appearance-none cursor-pointer shadow-xs"
                >
                  <option value="">{enquiryFormConfig.placeholders.spaceType}</option>
                  {availableSpaceTypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-600">
                  <span className="text-[9px]">▼</span>
                </div>
              </div>
              
              <input 
                type="text" 
                name="city" 
                placeholder={enquiryFormConfig.placeholders.city} 
                value={enquiryFormData.city} 
                onChange={handleFormFieldChange} 
                list="city-options-list"
                className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
              />
              <datalist id="city-options-list">
                {availableCities.map((city) => (
                  <option key={city.name} value={city.name} />
                ))}
              </datalist>
            </div>
            
            {/* Form Row 4: Submit Button */}
            <button 
              type="submit" 
              className="w-fit bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-5 py-2 shadow-xs transition-colors cursor-pointer active:scale-95 mt-0.5"
            >
              {isFormSubmitted ? enquiryFormConfig.buttons.submitted : enquiryFormConfig.buttons.idle}
            </button>
            
            {/* Submission Confirmation Banner (Fades out after 3 seconds) */}
            {isFormSubmitted && (
              <p
                className={`text-xs font-semibold text-white bg-green-600/90 py-1.5 px-3 rounded-[3px] w-fit shadow-md transition-all duration-500 ease-out ${
                  isMessageFading ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                }`}
                role="status"
              >
                {enquiryFormConfig.feedback.getSuccessText(submittedName)}
              </p>
            )}
          </form>
        </section>
      </div>

      {/* =================================================================== */}
      {/* SECTION 2: WORKSPACE CATEGORIES & "LIST FREE WITH COFYND" PROMO    */}
      {/* Data Source: homePromotionalData & perkIconSvgPaths from homedata.js */}
      {/* =================================================================== */}
      <section 
        aria-label="Workspace Categories and Property Listing" 
        className="w-full bg-[#f8fafc] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[300px_1fr_300px] gap-4 sm:gap-5 items-stretch">
            
            {/* 1. LEFT COLUMN: Coworking Spaces & Coliving Spaces */}
            <div className="flex flex-col gap-4 sm:gap-4.5 justify-between">
              {homePromotionalData.leftCards.map(renderPromoCard)}
            </div>

            {/* 2. CENTER COLUMN: "List Free with Cofynd" Promotional Banner */}
            <div className="md:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden bg-[#FFF8EC] border border-[#fdecd2] p-5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-xs min-h-[300px]">
              
              {/* Top / Main Banner Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
                
                {/* Left Headline, Subtitle & CTA */}
                <div className="flex flex-col items-start">
                  
                  {/* Title Row with "Free" Badge */}
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight leading-none">
                      {homePromotionalData.centerBanner.titlePrefix}
                    </span>
                    
                    {/* Free badge with spark decoration */}
                    <div className="relative inline-flex items-center ml-2.5 -top-1">
                      <svg className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-3 text-[#ff6b8b]" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 10L2 2M8 11V1M12 10l2-8" strokeLinecap="round" />
                      </svg>
                      <span className="bg-[#6c5ce7] text-white text-[10px] sm:text-[11px] font-black uppercase px-2 py-0.5 rounded shadow-xs transform -rotate-6 tracking-wide">
                        {homePromotionalData.centerBanner.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Sub-headline: with Cofynd */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight leading-tight mt-0.5">
                    {homePromotionalData.centerBanner.titleSuffix}
                  </h2>

                  {/* Subtitle description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-2 max-w-[240px]">
                    {homePromotionalData.centerBanner.subtitle}
                  </p>

                  {/* "List Your Property" CTA Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const formElement = document.querySelector('form');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                        const nameInput = formElement.querySelector('input[name="name"]');
                        if (nameInput) nameInput.focus();
                      }
                    }}
                    className="mt-4 bg-[#1e2329] hover:bg-slate-900 active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 cursor-pointer w-fit group"
                  >
                    <span>{homePromotionalData.centerBanner.ctaText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
                  </button>
                </div>

                {/* Right Side: Custom Perspective Frame & Decorative Arrows */}
                <div className="relative w-44 sm:w-48 lg:w-52 h-34 sm:h-38 shrink-0 self-center sm:self-auto my-1 sm:my-0">
                  
                  {/* Yellow Ray Bursts Above Frame */}
                  <div className="absolute -top-3.5 right-6 flex gap-1 text-amber-400 select-none pointer-events-none">
                    <span className="inline-block transform -rotate-25 text-xs font-black">\</span>
                    <span className="inline-block text-xs font-black">|</span>
                    <span className="inline-block transform rotate-25 text-xs font-black">/</span>
                  </div>

                  {/* Yellow Curved Hand-Drawn Arrow 1 */}
                  <svg className="absolute -top-3 left-4 w-9 h-9 text-amber-400 pointer-events-none z-10" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.8">
                    <path d="M4 18 C12 8 20 8 26 14" strokeLinecap="round" />
                    <path d="M21 15 L26 14 L24 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  {/* Yellow Curved Hand-Drawn Arrow 2 */}
                  <svg className="absolute top-9 -left-4 w-10 h-10 text-amber-400 pointer-events-none z-20" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.8">
                    <path d="M8 8 C8 24 16 28 26 28" strokeLinecap="round" />
                    <path d="M21 24 L26 28 L21 32" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  {/* Outer Cyan Hexagonal Frame */}
                  <div 
                    className="relative w-full h-full p-[3px] bg-[#bae6fd] shadow-md overflow-hidden"
                    style={{ clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 14% 100%, 0% 50%)' }}
                  >
                    <div 
                      className="w-full h-full overflow-hidden"
                      style={{ clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 14% 100%, 0% 50%)' }}
                    >
                      <img
                        src={homePromotionalData.centerBanner.previewImage}
                        alt="Space Interior Preview"
                        loading="lazy"
                        className="w-full h-full object-cover scale-105"
                      />
                    </div>
                  </div>

                  {/* "Your Space Here" Pill Badge Overlay */}
                  <div className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2 border border-slate-100 z-30">
                    <div className="w-6 h-6 rounded-full bg-[#ffe4e6] flex items-center justify-center shrink-0 text-[#e11d48]">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        {homePromotionalData.centerBanner.previewBadge?.line1 || 'Your Space'}
                      </span>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">
                        {homePromotionalData.centerBanner.previewBadge?.line2 || 'Here'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 3 Feature Benefit Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3.5 mt-3.5 border-t border-[#f8e0be]/60 relative z-10">
                {homePromotionalData.centerBanner.perks.map((perk) => (
                  <div key={perk.id} className="flex items-center gap-2 sm:gap-2.5">
                    <div className={`w-8 h-8 rounded-lg ${perk.bg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <svg className={`w-4 h-4 ${perk.color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={perkIconSvgPaths[perk.icon]} />
                      </svg>
                    </div>
                    <div className="flex flex-col text-[11px] sm:text-xs font-bold text-slate-800 leading-snug">
                      <span>{perk.line1}</span>
                      <span>{perk.line2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. RIGHT COLUMN: Virtual Offices & Office Spaces */}
            <div className="flex flex-col gap-4 sm:gap-4.5 justify-between">
              {homePromotionalData.rightCards.map(renderPromoCard)}
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 3: INDIA'S #1 ONLINE PLATFORM SHOWCASE                     */}
      {/* Data Source: platformShowcaseData from homedata.js                  */}
      {/* =================================================================== */}
      <section 
        aria-label="India's #1 Online Platform for Coworking & Coliving Spaces" 
        className="w-full bg-[#050505] relative overflow-hidden py-7 sm:py-9 lg:py-10 px-4 sm:px-6 lg:px-12 select-none border-t border-slate-900"
      >
        {/* Subtle Dark Bronze Geometric Rosette on Top Left */}
        <svg 
          className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-44 sm:w-56 h-44 sm:h-56 text-[#26140b] pointer-events-none opacity-85 select-none" 
          viewBox="0 0 300 300" 
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(150, 150)">
            <rect x="-95" y="-95" width="190" height="190" rx="6" transform="rotate(0)" />
            <rect x="-95" y="-95" width="190" height="190" rx="6" transform="rotate(22.5)" />
            <rect x="-95" y="-95" width="190" height="190" rx="6" transform="rotate(45)" />
            <rect x="-95" y="-95" width="190" height="190" rx="6" transform="rotate(67.5)" />
            <rect x="-75" y="-75" width="150" height="150" rx="4" transform="rotate(11.25)" fill="#1a0c06" />
            <rect x="-75" y="-75" width="150" height="150" rx="4" transform="rotate(33.75)" fill="#1a0c06" />
            <rect x="-75" y="-75" width="150" height="150" rx="4" transform="rotate(56.25)" fill="#1a0c06" />
            <rect x="-75" y="-75" width="150" height="150" rx="4" transform="rotate(78.75)" fill="#1a0c06" />
          </g>
        </svg>

        {/* Large Layered Geometric Star / Blossom on Right Side */}
        <svg 
          className="absolute -right-20 -bottom-20 sm:-right-12 sm:-bottom-16 lg:-right-8 lg:-bottom-10 w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] text-[#2c170e] pointer-events-none opacity-90 select-none" 
          viewBox="0 0 400 400" 
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(200, 200)">
            <rect x="-140" y="-140" width="280" height="280" rx="8" transform="rotate(0)" />
            <rect x="-140" y="-140" width="280" height="280" rx="8" transform="rotate(22.5)" />
            <rect x="-140" y="-140" width="280" height="280" rx="8" transform="rotate(45)" />
            <rect x="-140" y="-140" width="280" height="280" rx="8" transform="rotate(67.5)" />
            <rect x="-115" y="-115" width="230" height="230" rx="6" transform="rotate(11.25)" fill="#1f0f08" />
            <rect x="-115" y="-115" width="230" height="230" rx="6" transform="rotate(33.75)" fill="#1f0f08" />
            <rect x="-115" y="-115" width="230" height="230" rx="6" transform="rotate(56.25)" fill="#1f0f08" />
            <rect x="-115" y="-115" width="230" height="230" rx="6" transform="rotate(78.75)" fill="#1f0f08" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Overlapping Coworking & Coliving Space Cards */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-[290px] sm:w-[350px] md:w-[370px] h-[270px] sm:h-[310px] md:h-[325px]">
                
                {/* Back Card (Coworking - WeWork Forum) */}
                <article 
                  onClick={() => navigate(`/coworking/${platformShowcaseData.cards[0].city}`)}
                  className="absolute top-0 left-0 w-[185px] sm:w-[220px] md:w-[235px] bg-white rounded-[20px] sm:rounded-[22px] p-2 sm:p-2.5 shadow-2xl z-10 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-black/70 group"
                >
                  <div className="relative w-full h-26 sm:h-32 md:h-34 rounded-[14px] sm:rounded-[16px] overflow-hidden bg-slate-100">
                    <img 
                      src={platformShowcaseData.cards[0].image} 
                      alt={platformShowcaseData.cards[0].name} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs text-slate-800 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                      {platformShowcaseData.cards[0].badge}
                    </span>
                  </div>
                  <div className="px-1 pt-1.5 sm:pt-2 pb-0.5">
                    <h3 className="text-xs sm:text-[14px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {platformShowcaseData.cards[0].name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-normal mt-0.5 truncate">
                      {platformShowcaseData.cards[0].location}
                    </p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 mt-0.5">
                      {platformShowcaseData.cards[0].price}
                    </p>
                  </div>
                </article>

                {/* Front Card (Coliving - Stanza Living Dunkirk House) */}
                <article 
                  onClick={() => navigate(`/coworking/${platformShowcaseData.cards[1].city}`)}
                  className="absolute bottom-0 right-0 w-[185px] sm:w-[220px] md:w-[235px] bg-white rounded-[20px] sm:rounded-[22px] p-2 sm:p-2.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)] z-20 cursor-pointer transition-transform duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative w-full h-26 sm:h-32 md:h-34 rounded-[14px] sm:rounded-[16px] overflow-hidden bg-slate-100">
                    <img 
                      src={platformShowcaseData.cards[1].image} 
                      alt={platformShowcaseData.cards[1].name} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs text-slate-800 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                      {platformShowcaseData.cards[1].badge}
                    </span>
                  </div>
                  <div className="px-1 pt-1.5 sm:pt-2 pb-0.5">
                    <h3 className="text-xs sm:text-[14px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {platformShowcaseData.cards[1].name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-normal mt-0.5 truncate">
                      {platformShowcaseData.cards[1].location}
                    </p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-900 mt-0.5">
                      {platformShowcaseData.cards[1].price}
                    </p>
                  </div>
                </article>

              </div>
            </div>

            {/* Right Column: Platform Headline & Key Statistics */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-center lg:text-left lg:pl-6 xl:pl-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-black text-white tracking-tight leading-[1.16]">
                {platformShowcaseData.headlinePart1}
                <br />
                {platformShowcaseData.headlinePart2}
              </h2>

              {/* Live Platform Statistics Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-7 sm:gap-10 md:gap-12 mt-4 sm:mt-6">
                {platformShowcaseData.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-serif font-bold text-white/90 mt-1 sm:mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 4: TRUSTED BY 500+ COMPANIES CAROUSEL                      */}
      {/* Data Source: trustedCompaniesData from homedata.js                 */}
      {/* =================================================================== */}
      <section 
        aria-label="Trusted Companies"
        className="w-full bg-[#fbfcfd] border-t border-b border-slate-200/60 py-8 sm:py-10 select-none overflow-hidden"
        onMouseEnter={() => setIsCompanySliderPaused(true)}
        onMouseLeave={() => setIsCompanySliderPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-slate-900 text-center tracking-tight mb-5 sm:mb-6">
            {trustedCompaniesData.title}
          </h2>

          {/* Carousel Slider Row with Left & Right Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={handlePrevCompanySlide}
              aria-label="Previous company"
              className="shrink-0 p-1.5 sm:p-2 text-slate-400 hover:text-slate-900 active:scale-90 transition-all cursor-pointer rounded-full hover:bg-slate-100"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slider Viewport */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex items-center transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentCompanyIndex * (100 / visibleCompanyCardsCount)}%)`
                }}
              >
                {[...trustedCompaniesData.companies, ...trustedCompaniesData.companies, ...trustedCompaniesData.companies].map((company, index) => (
                  <div
                    key={`${company.id}-${index}`}
                    style={{ width: `${100 / visibleCompanyCardsCount}%` }}
                    className="shrink-0 px-1 sm:px-1.5"
                  >
                    <div className="bg-white border border-slate-200/90 rounded-[6px] sm:rounded-lg shadow-2xs hover:shadow-xs px-2 sm:px-3 py-2 sm:py-3 h-14 sm:h-16 lg:h-18 flex items-center justify-center transition-all cursor-pointer hover:border-slate-300 group">
                      {renderCompanyLogo(company)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={handleNextCompanySlide}
              aria-label="Next company"
              className="shrink-0 p-1.5 sm:p-2 text-slate-400 hover:text-slate-900 active:scale-90 transition-all cursor-pointer rounded-full hover:bg-slate-100"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Dots Navigation Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-5">
            {Array.from({ length: 6 }).map((_, index) => {
              const isActive = (currentCompanyIndex % 6) === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentCompanyIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-4 bg-slate-800' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 5: TOP COWORKING SPACES IN INDIA (18 CITIES)                */}
      {/* Data Source: topCoworkingCitiesData & availableCities from homedata */}
      {/* =================================================================== */}
      <section 
        aria-label="Top Coworking Spaces in India" 
        className="w-full bg-[#fbf9f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 select-none"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight text-center mb-8 sm:mb-10">
            {topCoworkingCitiesData.title}
          </h2>

          {/* 18-City Coworking Spaces Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {availableCities.map((city) => (
              <article
                key={city.name}
                onClick={() => selectCityAndOpenPopup(city, true)}
                className="group relative h-48 sm:h-52 md:h-56 rounded-[22px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 select-none bg-slate-900"
              >
                {/* City Workspace Image */}
                <img
                  src={topCoworkingCitiesData.workspaceImages[city.name] || city.image}
                  alt={`Coworking spaces in ${city.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay for optimal text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Centered City Name & Nickname / Tagline */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 px-4 text-center z-10">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-blue-400 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-200 font-medium tracking-tight mt-0.5 drop-shadow-sm">
                    {topCoworkingCitiesData.taglines[city.name] || topCoworkingCitiesData.defaultTagline}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 6: WHY CHOOSE mycoworking?                              */}
      {/* Data Source: whyChooseData from homedata.js                        */}
      {/* =================================================================== */}
      <section 
        aria-label="Why choose mycoworking" 
        className="w-full bg-[#1123a9] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 select-none"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-8 sm:mb-12">
            {whyChooseData.title}
          </h2>

          {/* 6-Value Proposition 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-12 lg:gap-x-16">
            {whyChooseData.features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4 sm:gap-5 group">
                <div className="shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {renderWhyChooseIcon(feature.icon)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* MODAL OVERLAY: City Selection Options Popup                        */}
      {/* =================================================================== */}
      <CityPopup
        activeCity={openedCityForPopup}
        onClose={closeCityPopup}
        onSelectSpace={handleSpaceSelectionFromPopup}
        spaceOptions={availableSpaceTypes}
      />
    </main>
  );
};

export default Homepage;
