import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBackgroundImage from './images/cityimages/navbarimage.png';
import { cityNames as availableCities, spaceOptions as availableSpaceTypes } from './images/imagesdata.js';
import CityGrid from '../components/city/CityGrid';
import CityPopup from '../components/city/CityPopup';

/**
 * Homepage Component
 * 
 * Main landing page for the coworking and flexible workspace platform.
 * Features:
 *  - Left Section: Workspace search filters, category selectors, and 18-city quick grid.
 *  - Right Section: Hero banner with workspace statistics and lead enquiry contact form.
 *  - Modal Overlay: City popup dialog to choose between Coworking Spaces and Virtual Offices.
 */
const Homepage = () => {
  const navigate = useNavigate();

  // =========================================================================
  // 1. APPLICATION STATE
  // =========================================================================

  // Tracks the workspace category chosen by the user in the quick search (e.g., "Coworking Spaces")
  const [selectedSpaceType, setSelectedSpaceType] = useState(availableSpaceTypes[0]);

  // Tracks the name of the currently selected city (defaults to 'Pune')
  const [selectedCityName, setSelectedCityName] = useState('Pune');

  // Stores contact and enquiry form inputs entered by the user
  const [enquiryFormData, setEnquiryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: '',
    city: ''
  });

  // Flag indicating whether the enquiry form has been submitted
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Holds the city object currently being viewed in the popup modal (null when closed)
  const [openedCityForPopup, setOpenedCityForPopup] = useState(null);

  // =========================================================================
  // 2. USER INTERACTION & FORM HANDLERS
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
    setIsFormSubmitted(false);
  };

  /**
   * Handles lead enquiry form submission and reveals the confirmation message.
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
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
      navigate(`/coworking/${city.name}`);
    }
  };

  // =========================================================================
  // 3. RENDER UI
  // =========================================================================
  return (
    <main className="w-full h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] overflow-hidden bg-[#f8fafc] flex flex-col antialiased font-sans select-none">
      <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
        
        {/* ================================================================= */}
        {/* LEFT COLUMN: Heading, Filter Dropdowns, Search Button, Cities Grid */}
        {/* ================================================================= */}
        <section className="w-full md:w-1/2 h-full px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col">
            {/* Decorative Brand Accent Dot */}
            <div className="w-7 h-7 bg-amber-400 rounded-full mb-2 sm:mb-2.5 shadow-[5px_5px_0_#0f172a]"></div>
            
            {/* Tagline */}
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-1 sm:mb-1.5">
              India's flexible workspace network
            </p>
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-slate-900 tracking-tight mb-2.5 sm:mb-3 leading-[1.12]">
              Choose from <span className="text-[#007bff]">10,000+</span><br />
              spaces to <span className="text-[#007bff]">Work & Live</span>
            </h1>

            {/* Quick Search Filter Dropdowns */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 max-w-xl">
              {/* Space Type Selector Dropdown */}
              <label className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-col bg-white shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">Looking For</span>
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
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">Select City</span>
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
                  navigate(`/coworking/${selectedCityName}`);
                } else {
                  selectCityAndOpenPopup(availableCities.find((city) => city.name === selectedCityName), true);
                }
              }} 
              className="w-fit bg-[#007bff] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1.5 transition-colors mb-2.5 sm:mb-3 shadow-xs cursor-pointer active:scale-95"
            >
              Search spaces <span aria-hidden="true">→</span>
            </button>
          </div>
          
          {/* 18-City Circular Selection Grid */}
          <CityGrid 
            cities={availableCities} 
            selectedCity={selectedCityName} 
            onCitySelect={(city) => selectCityAndOpenPopup(city, true)} 
          />
        </section>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: Hero Background, Statistics & Enquiry Form */}
        {/* ================================================================= */}
        <section 
          className="w-full md:w-1/2 h-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 py-4 sm:px-6 lg:px-10 overflow-hidden" 
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
          {/* Subtle Dark Image Overlay */}
          <div className="absolute inset-0 bg-slate-950/25"></div>

          {/* Workspace Statistics Header */}
          <div className="relative z-10 flex items-center justify-center gap-5 sm:gap-8 text-white text-center mb-3 sm:mb-4 drop-shadow-md">
            <div className="pr-3 sm:pr-5">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-tight">
                10,000+
              </h2>
              <p className="text-xs sm:text-base font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-0.5">
                Work Spaces
              </p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-white/70 self-center"></div>
            <div className="pl-3 sm:pl-5">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-tight">
                1,000+
              </h2>
              <p className="text-xs sm:text-base font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-0.5">
                Locations
              </p>
            </div>
          </div>
          
          {/* Lead Enquiry Contact Form */}
          <form onSubmit={handleFormSubmit} className="w-full max-w-[400px] sm:max-w-[430px] relative z-10 flex flex-col gap-2 sm:gap-2.5">
            {/* Form Row 1: Name Input */}
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Your Name" 
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
                placeholder="Enter Your Email" 
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
                  placeholder="Phone Number" 
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
                  <option value="">Type Of Space</option>
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
                placeholder="City" 
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
              {isFormSubmitted ? 'Submitted' : 'Submit'}
            </button>
            
            {/* Submission Confirmation Banner */}
            {isFormSubmitted && (
              <p className="text-xs font-semibold text-white bg-green-600/90 py-1.5 px-3 rounded-[3px] w-fit shadow-md" role="status">
                Thanks, {enquiryFormData.name || 'there'}! We'll be in touch shortly.
              </p>
            )}
          </form>
        </section>
      </div>

      {/* =================================================================== */}
      {/* MODAL: City Selection Options Popup                                */}
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
