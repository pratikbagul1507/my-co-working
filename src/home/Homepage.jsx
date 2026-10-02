import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CityGrid from '../components/city/CityGrid';
import CityPopup from '../components/city/CityPopup';
import Section from '../sections/Section';
import Footer from '../footer/Footer';

// ============================================================================
// DATA STORE IMPORT
// Hero and enquiry content is centralized in src/home/homedata.js.
// Section and footer content lives in src/sections/sectionData.js and
// src/footer/footerdata.js.
// ============================================================================
import {
  cityNames as availableCities,
  spaceOptions as availableSpaceTypes,
  heroSectionData,
  enquiryFormConfig
} from './homedata.js';

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

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  /**
   * Handles click on any city link from the footer Quick Links directory:
   * - Selects the chosen city in the top hero search without opening any popup modal
   * - Smoothly scrolls to the top of the homepage
   */
  const handleFooterCityClick = (cityName) => {
    const matchedCity = availableCities.find(
      (c) => c.name.toLowerCase() === cityName.toLowerCase()
    );
    if (matchedCity) {
      selectCityAndOpenPopup(matchedCity, false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // A city picked from the navbar "Coworking" dropdown arrives via router state:
  // handle it exactly like a city click on this page, then clear the state.
  useEffect(() => {
    const cityName = location.state?.openCity;
    if (!cityName) return;
    const matchedCity = availableCities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
    if (matchedCity) selectCityAndOpenPopup(matchedCity, true);
    navigate(location.pathname, { replace: true, state: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

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

      <Section
        onCategoryCardClick={handleCategoryCardClick}
        onCitySelect={(cityName) => selectCityAndOpenPopup(availableCities.find((city) => city.name === cityName), true)}
      />

      <Footer onCityClick={handleFooterCityClick} />

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
