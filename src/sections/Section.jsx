import { useState, useEffect } from 'react';
import virtualOfficeBg from './virtual-office-bg.jpg';
import {
  cityNames as availableCities,
  spaceOptions as availableSpaceTypes,
  enquiryFormConfig,
  perkIconSvgPaths,
  homePromotionalData,
  virtualOfficeShowcaseData,
  trustedCompaniesData,
  topCoworkingCitiesData,
  whyChooseData,
  customerReviewsData,
  faqSectionData,
  homepageDescriptionData
} from './sectionData.js';

// ----------------------------------------------------------------------------
// ENQUIRY CARD: standalone lead form (own state) used in the Virtual Office section.
// Enquiries are mailed to enquiryFormConfig.contactEmail.
// ----------------------------------------------------------------------------
const enquiryCardInputClass =
  'w-full h-10 sm:h-11 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500';

const emptyEnquiryForm = { name: '', email: '', phone: '', spaceType: '', city: '' };

const EnquiryCard = ({ heading = 'Get a Free Quote' }) => {
  const [formData, setFormData] = useState(emptyEnquiryForm);
  const [submittedName, setSubmittedName] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const spaceType = formData.spaceType || enquiryFormConfig.defaultValues.spaceType;
    const city = formData.city || enquiryFormConfig.defaultValues.countryFallback;

    const subject = encodeURIComponent(`Workspace Enquiry - ${spaceType} in ${city}`);
    const body = encodeURIComponent(
      `New Workspace Enquiry:\n\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Type of Space: ${spaceType}\n` +
      `City: ${city}\n` +
      `Submission Date: ${new Date().toLocaleString()}\n`
    );

    setSubmittedName(formData.name);
    setFormData(emptyEnquiryForm);
    window.location.href = `mailto:${enquiryFormConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col gap-3"
    >
      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
        {heading}
      </h3>

      <input
        type="text"
        name="name"
        placeholder={enquiryFormConfig.placeholders.name}
        value={formData.name}
        onChange={handleChange}
        required
        className={enquiryCardInputClass}
      />
      <input
        type="email"
        name="email"
        placeholder={enquiryFormConfig.placeholders.email}
        value={formData.email}
        onChange={handleChange}
        required
        className={enquiryCardInputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder={enquiryFormConfig.placeholders.phone}
        value={formData.phone}
        onChange={handleChange}
        required
        className={enquiryCardInputClass}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          name="spaceType"
          value={formData.spaceType}
          onChange={handleChange}
          className={`${enquiryCardInputClass} cursor-pointer`}
        >
          <option value="">{enquiryFormConfig.placeholders.spaceType}</option>
          {availableSpaceTypes.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <input
          type="text"
          name="city"
          placeholder={enquiryFormConfig.placeholders.city}
          value={formData.city}
          onChange={handleChange}
          list="enquiry-card-city-list"
          className={enquiryCardInputClass}
        />
        <datalist id="enquiry-card-city-list">
          {availableCities.map((city) => (
            <option key={city.name} value={city.name} />
          ))}
        </datalist>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white text-sm font-bold rounded-lg py-2.5 transition-all cursor-pointer"
      >
        {enquiryFormConfig.buttons.idle}
      </button>

      {submittedName !== null && (
        <p className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2" role="status">
          {enquiryFormConfig.feedback.getSuccessText(submittedName)}
        </p>
      )}
    </form>
  );
};

// ----------------------------------------------------------------------------
// HELPER: Renders vector SVG icons for "Why choose mycoworking" features
// ----------------------------------------------------------------------------
const renderWhyChooseIcon = (iconType) => {
  const paths = {
    brokerage: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    turnaround: 'M13 10V3L4 14h7v7l9-11h-7z',
    network: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    consultant: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    ethics: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    design: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
  };
  if (!paths[iconType]) return null;
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[iconType]} />
    </svg>
  );
};

/**
 * Homepage content sections: workspace categories / list-free promo, virtual office,
 * trusted companies, top cities, why choose us, reviews, FAQ and advisory banner.
 *
 * @param {Function} onCategoryCardClick - called with the clicked promo card
 * @param {Function} onCitySelect - called with the clicked city name
 */
const Section = ({ onCategoryCardClick, onCitySelect }) => {
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

  // -------------------------------------------------------------------------
  // State & Handlers for Customer Reviews Carousel (10 cards)
  // Data Source: customerReviewsData from homedata.js
  // -------------------------------------------------------------------------
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isReviewSliderPaused, setIsReviewSliderPaused] = useState(false);
  const [visibleReviewCardsCount, setVisibleReviewCardsCount] = useState(3);
  const totalReviews = customerReviewsData.reviews.length;
  const maxReviewIndex = Math.max(0, totalReviews - visibleReviewCardsCount);

  // Responsive visible review cards count (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResizeReviews = () => {
      if (window.innerWidth < 640) {
        setVisibleReviewCardsCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviewCardsCount(2);
      } else {
        setVisibleReviewCardsCount(3);
      }
    };
    handleResizeReviews();
    window.addEventListener('resize', handleResizeReviews);
    return () => window.removeEventListener('resize', handleResizeReviews);
  }, []);

  // Auto-scroll customer reviews every 4.5 seconds unless paused on user hover
  useEffect(() => {
    if (isReviewSliderPaused) return;
    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(reviewTimer);
  }, [isReviewSliderPaused, maxReviewIndex]);

  const handleNextReviewSlide = () => {
    setCurrentReviewIndex((prev) => (prev >= maxReviewIndex ? 0 : prev + 1));
  };

  const handlePrevReviewSlide = () => {
    setCurrentReviewIndex((prev) => (prev <= 0 ? maxReviewIndex : prev - 1));
  };

  // -------------------------------------------------------------------------
  // State for Frequently Asked Questions (FAQ) Accordion (7 cards)
  // Tracks the index of the currently expanded question (null = all collapsed)
  // -------------------------------------------------------------------------
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  /**
   * Reusable category card renderer to eliminate duplicate card markup
   */
  const renderPromoCard = (card) => (
    <article
      key={card.id}
      onClick={() => onCategoryCardClick(card)}
      className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-0.5 hover:border-orange-200 transition-all duration-300 group cursor-pointer flex items-center justify-between min-h-[140px] sm:min-h-[148px] h-full"
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
        <span className="text-lg sm:text-xl lg:text-[22px] font-light text-slate-600 tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
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

  return (
    <>
      {/* =================================================================== */}
      {/* SECTION 2: WORKSPACE CATEGORIES & "LIST FREE WITH COFYND" PROMO    */}
      {/* Data Source: homePromotionalData & perkIconSvgPaths from homedata.js */}
      {/* =================================================================== */}
      <section 
        aria-label="Workspace Categories and Property Listing" 
        className="w-full bg-[#f8fafc] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-5 items-stretch">
            
            {/* 1. LEFT COLUMN: Coworking Spaces & Virtual Offices */}
            <div className="flex flex-col gap-4 sm:gap-4.5 justify-between">
              {[...homePromotionalData.leftCards, ...homePromotionalData.rightCards].map(renderPromoCard)}
            </div>

            {/* 2. RIGHT COLUMN: "List Free with MyCoworking" Promotional Banner */}
            <div className="md:col-span-2 lg:col-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#fff4e5] via-[#ffe9cc] to-[#ffd8a8] border border-orange-200 p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-lg">
              
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange-400/20 pointer-events-none" />
              <div className="absolute -bottom-20 -left-10 w-52 h-52 rounded-full bg-amber-300/25 pointer-events-none" />

              {/* Top / Main Banner Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
                
                {/* Left Headline, Subtitle & CTA */}
                <div className="flex flex-col items-start">
                  
                  {/* Title Row with "Free" Badge */}
                  <div className="flex items-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none">
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
                  <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight mt-0.5">
                    {homePromotionalData.centerBanner.titleSuffix}
                  </h2>

                  {/* Subtitle description */}
                  <p className="text-sm sm:text-[15px] text-slate-600 font-medium leading-snug mt-1.5 max-w-[340px]">
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
                    className="mt-3 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 cursor-pointer w-fit group"
                  >
                    <span>{homePromotionalData.centerBanner.ctaText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
                  </button>
                </div>

                {/* Right Side: Custom Perspective Frame & Decorative Arrows */}
                <div className="relative w-44 sm:w-52 lg:w-60 h-32 sm:h-36 lg:h-40 shrink-0 self-center sm:self-auto my-1 sm:my-0">
                  
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 mt-3 border-t border-[#f8e0be]/60 relative z-10">
                {homePromotionalData.centerBanner.perks.map((perk) => (
                  <div key={perk.id} className="flex items-center gap-2.5 bg-white/70 hover:bg-white border border-white rounded-xl px-3 py-2 shadow-sm transition-colors">
                    <div className={`w-10 h-10 rounded-lg ${perk.bg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <svg className={`w-5 h-5 ${perk.color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={perkIconSvgPaths[perk.icon]} />
                      </svg>
                    </div>
                    <div className="flex flex-col text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      <span>{perk.line1}</span>
                      <span>{perk.line2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 3: BOOK YOUR VIRTUAL OFFICE (points + enquiry form)         */}
      {/* Data Source: virtualOfficeShowcaseData from common.js               */}
      {/* =================================================================== */}
      <section
        aria-label="Book Your Virtual Office with MyCoworking"
        style={{ backgroundImage: `url(${virtualOfficeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="w-full bg-[#050505] relative overflow-hidden py-6 sm:py-8 px-4 sm:px-6 lg:px-12 border-t border-slate-900"
      >
        {/* Dark overlay keeps text readable over the background photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: heading, six service points, contact details */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {virtualOfficeShowcaseData.headline}{' '}
                <span className="text-orange-500">{virtualOfficeShowcaseData.highlight}</span>
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6 sm:mt-8">
                {virtualOfficeShowcaseData.points.map((point) => (
                  <li key={point.id} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={point.icon} />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">{point.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 text-sm text-white/90">
                <a href={`tel:${virtualOfficeShowcaseData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z" />
                  </svg>
                  {virtualOfficeShowcaseData.phone}
                </a>
                <a href={`mailto:${virtualOfficeShowcaseData.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {virtualOfficeShowcaseData.email}
                </a>
              </div>
            </div>

            {/* Right: enquiry form */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <EnquiryCard heading="Enquire About a Virtual Office" />
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
        className="w-full bg-[#fbfcfd] border-t border-b border-slate-200/60 py-5 sm:py-6 select-none overflow-hidden"
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
        className="w-full bg-[#fbf9f6] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 select-none"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight text-center mb-5 sm:mb-6">
            {topCoworkingCitiesData.title}
          </h2>

          {/* 18-City Coworking Spaces Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 xl:gap-4">
            {availableCities.map((city) => (
              <article
                key={city.name}
                onClick={() => onCitySelect(city.name)}
                className="group relative h-48 sm:h-52 md:h-56 lg:h-44 rounded-[22px] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 select-none bg-slate-900"
              >
                {/* City Workspace Image */}
                <img
                  src={topCoworkingCitiesData.workspaceImages[city.name]}
                  alt={`Coworking spaces in ${city.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay for optimal text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* Centered City Name & Nickname / Tagline */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 px-4 text-center z-10">
                  <h3 className="text-lg sm:text-xl lg:text-base font-black text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-blue-400 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] lg:text-[11px] text-slate-200 font-medium tracking-tight mt-0.5 drop-shadow-sm">
                    {topCoworkingCitiesData.taglines[city.name] || topCoworkingCitiesData.defaultTagline}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>




  {/* =================================================================== */}
      {/* SECTION 7: WHY CHOOSE mycoworking?                              */}
      {/* Data Source: whyChooseData from homedata.js                        */}
      {/* =================================================================== */}
      <section
        aria-label="Why choose mycoworking"
        className="w-full relative overflow-hidden bg-gradient-to-br from-[#fff7ed] via-white to-[#eff6ff] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 select-none"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange-200/40 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-200/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {whyChooseData.title}
            </h2>
            <span className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>

          {/* Value Proposition Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {whyChooseData.features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative flex items-start gap-4 sm:gap-5 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-orange-300 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute top-2 right-4 text-5xl font-black text-slate-100 group-hover:text-orange-100 transition-colors leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300 relative z-10">
                  {renderWhyChooseIcon(feature.icon)}
                </div>
                <div className="flex flex-col relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  


      {/* =================================================================== */}
      {/* SECTION 6: CUSTOMER TESTIMONIALS & REVIEWS (10 CARDS)              */}
      {/* Data Source: customerReviewsData from homedata.js                  */}
      {/* =================================================================== */}
      <section 
        aria-label="Customer Reviews and Testimonials" 
        className="w-full bg-[#f8fafc] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 select-none overflow-hidden"
        onMouseEnter={() => setIsReviewSliderPaused(true)}
        onMouseLeave={() => setIsReviewSliderPaused(false)}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007bff] bg-blue-50 px-3 py-1 rounded-full mb-2.5 border border-blue-100/80">
                {customerReviewsData.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                {customerReviewsData.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5 max-w-xl">
                {customerReviewsData.subtitle}
              </p>
            </div>

            {/* Header Right: Rating Badge & Arrow Navigation */}
            <div className="flex items-center gap-3 self-start md:self-end">
              {/* Rating summary pill */}
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-2xs">
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs font-bold text-slate-800">
                  {customerReviewsData.ratingSummary.averageRating}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  ({customerReviewsData.ratingSummary.totalReviews})
                </span>
              </div>

              {/* Prev & Next Slide Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevReviewSlide}
                  aria-label="Previous reviews"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNextReviewSlide}
                  aria-label="Next reviews"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Review Cards Carousel Viewport */}
          <div className="overflow-hidden w-full py-2 -my-2">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentReviewIndex * (100 / visibleReviewCardsCount)}%)`
              }}
            >
              {customerReviewsData.reviews.map((item) => (
                <div
                  key={item.id}
                  style={{ width: `${100 / visibleReviewCardsCount}%` }}
                  className="shrink-0 px-2 sm:px-2.5 flex"
                >
                  <article className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between hover:border-blue-400">
                    
                    {/* Top Row: User Avatar, Name, Role, and Quote SVG */}
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            loading="lazy"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all shrink-0"
                          />
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                {item.name}
                              </h3>
                              <svg className="w-4 h-4 text-emerald-500 shrink-0 fill-current" viewBox="0 0 20 20" title="Verified Customer">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                              {item.role}
                            </p>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                              📍 {item.city}
                            </p>
                          </div>
                        </div>

                        {/* Quote icon mark */}
                        <svg className="w-7 h-7 text-blue-100 group-hover:text-blue-200 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Middle: Star Rating & Space Type Pill */}
                      <div className="flex items-center justify-between py-2 border-t border-b border-slate-100 mb-3">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${starIndex < item.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs font-bold text-slate-700 ml-1">
                            {item.rating}.0
                          </span>
                        </div>
                        <span className="bg-blue-50 text-[#007bff] font-semibold text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full border border-blue-100/60">
                          {item.spaceType}
                        </span>
                      </div>

                      {/* Review text */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal italic">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Bottom Row: Recency & Verified Status */}
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Verified Review
                      </span>
                      <span>{item.date}</span>
                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
            {Array.from({ length: maxReviewIndex + 1 }).map((_, index) => {
              const isActive = currentReviewIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review page ${index + 1}`}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ - 7 RECTANGLE CARDS)    */}
      {/* Data Source: faqSectionData from homedata.js                       */}
      {/* Features:                                                          */}
      {/*  - Full-width rectangular cards stacked one below another          */}
      {/*  - Down arrow on the LEFT side of each card                        */}
      {/*  - Answer hidden by default, smoothly reveals on click             */}
      {/* =================================================================== */}
      <section 
        aria-label="Frequently Asked Questions" 
        className="w-full bg-[#fbf9f6] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 select-none"
      >
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007bff] bg-blue-50 px-3.5 py-1 rounded-full mb-3 border border-blue-100/80">
              {faqSectionData.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
              {faqSectionData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
              {faqSectionData.subtitle}
            </p>
          </div>

          {/* 7 Full-Width Stacked Rectangular Cards (One by One) */}
          <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
            {faqSectionData.questions.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`w-full bg-white rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xs ${
                    isOpen
                      ? 'border-blue-400 ring-2 ring-blue-500/10 shadow-sm'
                      : 'border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {/* Clickable Header: Down Arrow on LEFT side, Question Text */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-3.5 sm:gap-4.5 p-4 sm:p-5 lg:p-6 text-left cursor-pointer transition-colors hover:bg-slate-50/70 group"
                  >
                    {/* Down Arrow on the LEFT side */}
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#007bff] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#007bff]'
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>

                    {/* Question text */}
                    <span
                      className={`text-sm sm:text-base lg:text-[17px] font-bold tracking-tight transition-colors flex-1 leading-snug ${
                        isOpen ? 'text-[#007bff]' : 'text-slate-900 group-hover:text-[#007bff]'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer Content: Hidden by default, smooth CSS grid-rows animation */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-15 sm:pl-17.5 lg:pl-19.5 pr-5 sm:pr-8 pb-5 pt-1 border-t border-slate-100">
                        <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =============================================================== */}
          {/* PLATFORM OVERVIEW & ECOSYSTEM DESCRIPTION (UNDER QUESTION CARDS) */}
          {/* Data Source: homepageDescriptionData from homedata.js            */}
          {/* =============================================================== */}
          */}

        </div>
      </section>
    </>
  );
};

export default Section;
