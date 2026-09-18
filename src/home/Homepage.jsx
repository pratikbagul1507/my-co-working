import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundHero from './images/cityimages/navbarimage.png';
import serviceOfficeImg from '../assets/service-office.jpg';
import virtualOfficeBg from '../assets/images/virtual-office-bg.jpg';
import { cityNames, spaceOptions } from './images/imagesdata.js';

const serviceCards = [
  { title: "Coworking Space" },
  { title: "Virtual Office" },
  { title: "Business Services" },
  { title: "Business Plans" },
  { title: "List Your Space" }
];

const trustedBrands = [
  {
    id: 'tribe',
    name: 'TRIBE',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
          ▲
        </div>
        <div className="flex flex-col text-left">
          <span className="text-slate-900 font-black text-base sm:text-lg tracking-[0.18em] uppercase leading-none">
            TRIBE
          </span>
          <span className="text-[9px] font-bold text-rose-600 tracking-[0.22em] uppercase mt-0.5">
            CO-LIVING
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'covie',
    name: 'COVIE',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-teal-600 font-black text-[10px] tracking-widest uppercase leading-none">THE</span>
          <span className="text-slate-900 font-black text-lg tracking-[0.14em] uppercase leading-none mt-0.5">COVIE</span>
        </div>
      </div>
    )
  },
  {
    id: 'helloworld',
    name: 'hello world',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-black text-lg shadow-sm">
          h
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-slate-900 font-extrabold text-base sm:text-lg lowercase tracking-tight">hello</span>
          <span className="text-amber-500 font-black text-base sm:text-lg lowercase tracking-tight">world</span>
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 ml-0.5"></span>
        </div>
      </div>
    )
  },
  {
    id: 'isthara',
    name: 'ISTHARA',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-slate-50 border border-slate-100 shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
            <circle cx="11" cy="11" r="5" fill="#F43F5E" />
            <circle cx="21" cy="11" r="5" fill="#FBBF24" />
            <circle cx="11" cy="21" r="5" fill="#8B5CF6" />
            <circle cx="21" cy="21" r="5" fill="#06B6D4" />
          </svg>
        </div>
        <span className="text-violet-950 font-black text-base sm:text-lg tracking-[0.16em] uppercase">
          ISTHARA
        </span>
      </div>
    )
  },
  {
    id: 'yourspace',
    name: 'your space',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-sm font-bold">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="flex items-baseline">
          <span className="text-orange-600 font-extrabold text-base sm:text-lg lowercase tracking-tight">your</span>
          <span className="text-red-600 font-extrabold text-base sm:text-lg lowercase tracking-tight">space</span>
        </div>
      </div>
    )
  },
  {
    id: 'settl',
    name: 'Settl.',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
          S
        </div>
        <div className="flex items-baseline">
          <span className="text-slate-900 font-black text-lg sm:text-xl tracking-tight">Settl</span>
          <span className="text-red-600 font-black text-2xl sm:text-3xl leading-none">.</span>
        </div>
      </div>
    )
  }
];

// Duplicate brands 4x for continuous infinite scrolling
const brandList = [
  ...trustedBrands,
  ...trustedBrands,
  ...trustedBrands,
  ...trustedBrands
];

const puneOfficeImage = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";

const topCities = [
  { name: "Gurugram", tagline: "Millennium City", image: puneOfficeImage },
  { name: "Hyderabad", tagline: "A city of pearls", image: puneOfficeImage },
  { name: "Bangalore", tagline: "India's Silicon Valley", image: puneOfficeImage },
  { name: "Mumbai", tagline: "A City of Dreams", image: puneOfficeImage },
  { name: "Pune", tagline: "Queen of the Deccan", image: puneOfficeImage },
  { name: "Delhi", tagline: "The Nation Capital", image: puneOfficeImage },
  { name: "Noida", tagline: "The Hitech City", image: puneOfficeImage },
  { name: "Lucknow", tagline: "The City of Nawabs", image: puneOfficeImage }
];

const virtualOfficeFeatures = [
  {
    title: "Company Registration",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "GST Registration",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Business Address",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Mailing Address",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Reception Services",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    title: "Meeting Room Access",
    icon: (
      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const Homepage = () => {
  const navigate = useNavigate();
  const [lookingFor, setLookingFor] = useState(spaceOptions[0]);
  const [selectedCity, setSelectedCity] = useState('Pune');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeCity, setActiveCity] = useState(null);

  // CSS Marquee & Interactive Navigation Override State
  const [isManual, setIsManual] = useState(false);
  const [manualIndex, setManualIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const manualTimerRef = useRef(null);

  // Continuous Dot Synchronization during Marquee
  useEffect(() => {
    if (isManual) return;
    const dotInterval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(dotInterval);
  }, [isManual]);

  const triggerManualMove = (newIndex) => {
    setIsManual(true);
    setManualIndex(newIndex);
    setActiveDot(((newIndex % 6) + 6) % 6);

    if (manualTimerRef.current) {
      clearTimeout(manualTimerRef.current);
    }
    // Safely resume smooth CSS continuous marquee after 4 seconds
    manualTimerRef.current = setTimeout(() => {
      setIsManual(false);
    }, 4000);
  };

  const handleLeftArrow = () => {
    triggerManualMove(manualIndex > 0 ? manualIndex - 1 : 5);
  };

  const handleRightArrow = () => {
    triggerManualMove((manualIndex + 1) % 12);
  };

  const handleDotClick = (dotIndex) => {
    triggerManualMove(dotIndex);
  };

  const handleInput = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleCitySelect = (city, openModal = false) => {
    setSelectedCity(city.name);
    setFormData((previous) => ({ ...previous, city: city.name }));
    if (openModal) setActiveCity(city);
  };

  const handleSpaceSelect = (spaceType) => {
    setLookingFor(spaceType);
    setFormData((previous) => ({ ...previous, spaceType }));
  };

  const handleCityChange = (event, openModal = false) => {
    const city = cityNames.find((item) => item.name === event.target.value);
    if (city) handleCitySelect(city, openModal);
  };

  const closeCityModal = () => {
    setActiveCity(null);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] flex flex-col antialiased font-sans select-none">
      <div className="w-full flex flex-col md:flex-row">
        <section className="w-full md:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col">
        <div className="w-9 h-9 bg-amber-400 rounded-full mb-7 shadow-[8px_8px_0_#0f172a]"></div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 mb-3">India's flexible workspace network</p>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-[1.08]">
          Choose from <span className="text-[#007bff]">10,000+</span><br />
          spaces to <span className="text-[#007bff]">Work & Live</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <label className="border border-slate-200 rounded-xl p-3 flex flex-col bg-white shadow-sm">
            <span className="text-xs font-semibold text-slate-400 mb-1">Looking For</span>
            <select 
              value={lookingFor} 
              onChange={(event) => handleSpaceSelect(event.target.value)}
              className="text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer"
            >
              {spaceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          
          <label className="border border-slate-200 rounded-xl p-3 flex flex-col bg-white shadow-sm">
            <span className="text-xs font-semibold text-slate-400 mb-1">Select City</span>
            <select 
              value={selectedCity} 
              onChange={handleCityChange}
              className="text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer"
            >
              {cityNames.map((city) => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
          </label>
        </div>

        <button 
          type="button" 
          onClick={() => {
            if (lookingFor === 'Coworking Spaces') {
              navigate(`/coworking/${selectedCity}`);
            } else {
              handleCitySelect(cityNames.find((city) => city.name === selectedCity), true);
            }
          }} 
          className="w-fit bg-[#007bff] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors mb-12 shadow-sm cursor-pointer"
        >
          Search spaces <span aria-hidden="true">→</span>
        </button>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 sm:gap-y-7">
          {cityNames.map((city) => {
            const isSelected = selectedCity === city.name;
            return (
              <button 
                type="button" 
                key={city.name} 
                onClick={() => handleCitySelect(city, true)} 
                className="group flex flex-col items-center cursor-pointer transition-transform transform active:scale-95 focus:outline-none"
              >
                <div className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-4 bg-slate-100 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1.5 ${
                  isSelected 
                    ? 'border-[#007bff] ring-4 ring-[#007bff]/25 shadow-blue-500/20 scale-105' 
                    : 'border-white group-hover:border-[#007bff]/60 group-hover:ring-4 group-hover:ring-[#007bff]/15'
                }`}>
                  <img 
                    src={city.imgage} 
                    alt={`${city.name} workspace`} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                  />
                  {/* Subtle glossy overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className={`mt-2 text-xs sm:text-sm font-semibold text-center tracking-tight transition-colors duration-200 ${
                  isSelected ? 'text-[#007bff] font-bold' : 'text-slate-700 group-hover:text-[#007bff]'
                }`}>
                  {city.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section 
        className="w-full md:w-1/2 min-h-[640px] md:min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center p-6 lg:p-12" 
        style={{ backgroundImage: `url(${backgroundHero})` }}
      >
        <div className="absolute inset-0 bg-slate-950/25"></div>

        {/* Stats header matching reference image */}
        <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-10 text-white text-center mb-6 drop-shadow-md">
          <div className="pr-4 sm:pr-6">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
              10,000+
            </h2>
            <p className="text-base sm:text-xl font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-1">
              Work Spaces
            </p>
          </div>
          <div className="w-px h-14 sm:h-16 bg-white/70 self-center"></div>
          <div className="pl-4 sm:pl-6">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
              1,000+
            </h2>
            <p className="text-base sm:text-xl font-serif font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-1">
              Locations
            </p>
          </div>
        </div>
        
        {/* Search / Enquiry Form matching reference image */}
        <form onSubmit={handleSubmit} className="w-full max-w-[460px] relative z-10 flex flex-col gap-3">
          {/* Row 1: Name */}
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Your Name" 
            value={formData.name} 
            onChange={handleInput} 
            required 
            className="w-full h-11 bg-white text-slate-800 placeholder-[#75848a] text-sm border border-[#cfd4d9] rounded-[3px] px-3.5 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
          />
          
          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Your Email" 
              value={formData.email} 
              onChange={handleInput} 
              required 
              className="w-full h-11 bg-white text-slate-800 placeholder-[#75848a] text-sm border border-[#cfd4d9] rounded-[3px] px-3.5 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
            />
            
            <div className="flex items-center w-full h-11 bg-white border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus-within:border-[#007bff] focus-within:ring-1 focus-within:ring-[#007bff]">
              <div className="flex items-center gap-1.5 pr-2 select-none shrink-0 cursor-pointer border-r border-slate-200">
                <svg className="w-5 h-3.5 rounded-[1px] shadow-xs" viewBox="0 0 24 16">
                  <rect width="24" height="5.33" fill="#FF9933" />
                  <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                  <rect y="10.66" width="24" height="5.34" fill="#128807" />
                  <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
                  <circle cx="12" cy="8" r="0.6" fill="#000080" />
                </svg>
                <span className="text-[10px] text-slate-500">▼</span>
              </div>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleInput} 
                required 
                className="w-full h-full bg-transparent text-slate-800 placeholder-[#75848a] text-sm pl-2.5 focus:outline-none" 
              />
            </div>
          </div>
          
          {/* Row 3: Type of Space & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative w-full">
              <select 
                name="spaceType" 
                value={formData.spaceType} 
                onChange={(event) => handleSpaceSelect(event.target.value)}
                className="w-full h-11 bg-white text-slate-800 text-sm border border-[#cfd4d9] rounded-[3px] px-3.5 pr-8 focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff] appearance-none cursor-pointer shadow-xs"
              >
                <option value="">Type Of Space</option>
                {spaceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-600">
                <span className="text-[10px]">▼</span>
              </div>
            </div>
            
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              value={formData.city} 
              onChange={handleInput}
              list="city-options-list"
              className="w-full h-11 bg-white text-slate-800 placeholder-[#75848a] text-sm border border-[#cfd4d9] rounded-[3px] px-3.5 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
            />
            <datalist id="city-options-list">
              {cityNames.map((city) => (
                <option key={city.name} value={city.name} />
              ))}
            </datalist>
          </div>
          
          {/* Row 4: Submit Button */}
          <button 
            type="submit" 
            className="w-fit bg-white hover:bg-slate-50 text-slate-800 text-sm border border-[#cfd4d9] rounded-[3px] px-6 py-2.5 shadow-xs transition-colors cursor-pointer active:scale-95 mt-1"
          >
            {submitted ? 'Submitted' : 'Submit'}
          </button>
          
          {submitted && (
            <p className="text-xs font-semibold text-white bg-green-600/90 py-2 px-3 rounded-[3px] w-fit shadow-md" role="status">
              Thanks, {formData.name || 'there'}! We'll be in touch shortly.
            </p>
          )}
        </form>
      </section>
      </div>

      {/* 5 Service Cards Section under cities and form */}
      <section className="w-full bg-[#f8fafc] px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                onClick={() => {
                  if (card.title === 'Coworking Space') {
                    navigate('/coworking');
                  }
                }}
                className="group flex items-center h-28 sm:h-32 bg-white rounded-2xl overflow-hidden border border-[#ffe1d1] shadow-[0_8px_25px_rgba(242,100,45,0.14)] hover:shadow-[0_12px_32px_rgba(242,100,45,0.24)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-5/12 h-full overflow-hidden shrink-0">
                  <img
                    src={serviceOfficeImg}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-7/12 px-5 sm:px-6 flex items-center">
                  <h3 className="text-[#FF4A00] hover:text-[#007bff] group-hover:text-[#007bff] font-black text-xl sm:text-2xl leading-tight tracking-tight transition-colors duration-300">
                    {card.title === 'Coworking Space' && <>Coworking<br />Space</>}
                    {card.title === 'Virtual Office' && <>Virtual Office</>}
                    {card.title === 'Business Services' && <>Business<br />Services</>}
                    {card.title === 'Business Plans' && <>Business Plans</>}
                    {card.title === 'List Your Space' && <>List Your<br />Space</>}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Promotional Section (Solid Black with Gold Mandala Vector Art) */}
      <section className="relative w-full bg-black text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Subtle Background Vector Graphic (Dark Gold / Brown Mandala Pattern) */}
        <div 
          className="absolute right-[-10%] sm:right-[-5%] top-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] lg:w-[720px] h-[480px] sm:h-[620px] lg:h-[720px] pointer-events-none opacity-20 select-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-amber-600/80">
            {/* Concentric rings & geometric circular teeth / gear rays */}
            <circle cx="250" cy="250" r="230" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="200" strokeWidth="2" />
            <circle cx="250" cy="250" r="160" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="250" cy="250" r="120" strokeWidth="2" />
            <circle cx="250" cy="250" r="70" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="30" strokeWidth="1" />
            {/* Mandala / Gear Ray spikes */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={`ray-${i}`}
                x1="250"
                y1="250"
                x2={250 + 225 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={250 + 225 * Math.sin((i * 15 * Math.PI) / 180)}
                strokeWidth="1"
                strokeOpacity="0.6"
              />
            ))}
            {/* Intermediate geometric petals */}
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={`petal-${i}`}
                cx={250 + 140 * Math.cos((i * 30 * Math.PI) / 180)}
                cy={250 + 140 * Math.sin((i * 30 * Math.PI) / 180)}
                r="35"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Overlapping Polished Cards (Restored Larger Size) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[370px] sm:h-[420px]">
              
              {/* Card 1 (Top Left): WeWork Forum Coworking Space */}
              <div className="absolute top-0 left-0 w-[78%] sm:w-[80%] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 text-slate-800 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="WeWork Forum Coworking"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#007bff] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                    Coworking
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-white">
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
                    WeWork Forum
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    DLF Cyber City, Gurugram
                  </p>
                  <p className="text-sm sm:text-base font-black text-slate-900 mt-2.5 flex items-baseline gap-1">
                    <span>₹ 28,000</span>
                    <span className="text-xs font-normal text-slate-500">/ month</span>
                  </p>
                </div>
              </div>

              {/* Card 2 (Bottom Right): Stanza Living Dunkirk House Coliving Space */}
              <div className="absolute bottom-0 right-0 w-[72%] sm:w-[76%] bg-white rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-20 text-slate-800 border-2 border-white/40 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-40 sm:h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
                    alt="Stanza Living Dunkirk House Coliving"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#f2642d] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                    Coliving
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-white">
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
                    Stanza Living Dunkirk House
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    sector-48, Gurgaon
                  </p>
                  <p className="text-sm sm:text-base font-black text-slate-900 mt-2.5 flex items-baseline gap-1">
                    <span>₹ 11,799</span>
                    <span className="text-xs font-normal text-slate-500">/ month</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Heading & Statistics (Compact & Elegant Proportions) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white leading-snug lg:leading-[1.25] tracking-tight max-w-lg">
              India's #1 online platform for Coworking &amp; Coliving Spaces
            </h2>

            {/* Elegant Divider Line */}
            <div className="w-full h-px bg-white/15 my-6 sm:my-7" />

            {/* Stats Sub-grid (Three columns - Clean & Proportionate) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {/* Column 1 */}
              <div>
                <p className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight leading-none">
                  1,000+
                </p>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 mt-1.5">
                  Locations
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <p className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight leading-none">
                  10,000+
                </p>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 mt-1.5">
                  Work Spaces
                </p>
              </div>

              {/* Column 3 */}
              <div>
                <p className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight leading-none">
                  25+
                </p>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 mt-1.5">
                  Cities
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* "Trusted By" Company Logo Slider Section */}
      <section className="w-full bg-white py-14 sm:py-16 px-4 sm:px-8 border-t border-slate-100 overflow-hidden">
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 25s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          {/* Centered Heading */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center tracking-tight mb-8 sm:mb-10">
            Trusted by more than 500+ Companies
          </h3>

          {/* Carousel Row: Left Arrow, Slider Container, Right Arrow */}
          <div className="relative flex items-center gap-2 sm:gap-4">
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={handleLeftArrow}
              aria-label="Previous logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95 z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Continuous CSS Marquee Container */}
            <div className="relative overflow-hidden w-full py-3 px-1">
              <div
                className={`flex items-center gap-4 sm:gap-6 ${
                  !isManual ? 'marquee-track' : 'transition-transform duration-500 ease-out'
                }`}
                style={
                  isManual
                    ? { transform: `translateX(-${manualIndex * 220}px)` }
                    : undefined
                }
              >
                {brandList.map((brand, index) => (
                  <div
                    key={`${brand.id}-${index}`}
                    className="group relative bg-white border border-slate-200/80 rounded-xl px-6 py-4 flex items-center justify-center min-w-[170px] sm:min-w-[195px] h-[74px] sm:h-[82px] shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 shrink-0 select-none cursor-pointer"
                  >
                    <div className="flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                      {brand.logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleRightArrow}
              aria-label="Next logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95 z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider Pagination Bullet Dots (6 Dots for 6 Brands) */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: 6 }).map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                type="button"
                onClick={() => handleDotClick(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                  activeDot === dotIdx
                    ? 'w-6 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities Selection Section (Light Pink Bounded Rectangle Container & Compact Landscape Cards) */}
      <section className="w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto bg-pink-50 rounded-2xl sm:rounded-3xl border border-pink-100/90 shadow-2xs py-6 sm:py-8 px-4 sm:px-8 lg:px-10">
          {/* Centered Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 text-center tracking-tight mb-5 sm:mb-6">
            Top Coworking Spaces in India
          </h2>

          {/* 8-Card Responsive Grid (Compact Landscape Rectangles) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4.5">
            {topCities.map((city) => (
              <div
                key={city.name}
                onClick={() => navigate(`/coworking/${city.name.toLowerCase()}`)}
                className="group relative h-24 sm:h-28 lg:h-30 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none"
              >
                {/* Background Image */}
                <img
                  src={city.image}
                  alt={`${city.name} Coworking Spaces`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Reduced Dark Overlay for Increased Brightness & Vibrancy */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-black/15 group-hover:from-black/65 group-hover:via-black/35 transition-colors duration-300" />

                {/* Centered Overlay Typography */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-2.5 py-1.5 text-center z-10">
                  <h3 className="text-sm sm:text-base lg:text-lg font-black text-white tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-tight">
                    {city.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-100 mt-0.5 tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] leading-snug px-1">
                    {city.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Office Services Section */}
      <section className="w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto bg-[#e5ded4] rounded-2xl sm:rounded-3xl border border-[#cfc6b8] shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch">
          
          {/* Left Side: Content & Features */}
          <div className="w-full md:w-3/5 lg:w-[58%] p-5 sm:p-6 lg:p-7 flex flex-col">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-slate-900 tracking-tight leading-snug mb-3.5 sm:mb-4">
              Book Your Virtual Office with <span className="block mt-0.5 text-slate-900">my<span className="text-orange-500">coworking</span><span className="text-orange-500 font-extrabold leading-none">.</span></span>
            </h2>

            {/* 3x2 Grid of Feature Cards (Larger buttons, generous padding, bold legible text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
              {virtualOfficeFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-4.5 sm:py-3.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50/90 text-blue-600 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight leading-snug">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Contact Bar - Pulled directly up closer to the buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-3 border-t border-slate-300/80 text-xs sm:text-sm font-bold text-slate-700">
              <a 
                href="tel:9028760011" 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z"/>
                  </svg>
                </div>
                <span>9028760011</span>
              </a>

              <a 
                href="mailto:info@gmail.com" 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span>info@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Side: Visual Asset - Flush without cropping */}
          <div className="w-full md:w-2/5 lg:w-[42%] relative overflow-hidden self-stretch min-h-[180px] sm:min-h-[200px] md:min-h-0 shrink-0">
            <img 
              src={virtualOfficeBg} 
              alt="Virtual Office Workspaces" 
              className="w-full h-full object-cover object-center" 
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {activeCity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4" onClick={closeCityModal}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="city-modal-title"
            className="relative w-full max-w-lg rounded-2xl bg-white px-6 py-10 text-center shadow-2xl sm:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button 
              type="button" 
              onClick={closeCityModal} 
              aria-label="Close city options" 
              className="absolute right-4 top-4 text-2xl leading-none text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              ×
            </button>
            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-amber-50 shadow-sm">
              <img src={activeCity.imgage} alt={`${activeCity.name} city`} className="h-full w-full object-cover" />
            </div>
            <h2 id="city-modal-title" className="text-xl font-bold text-slate-900 sm:text-2xl">Find the best spaces in {activeCity.name}</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {spaceOptions.map((option) => {
                const isCoworking = option === 'Coworking Spaces';
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => {
                      handleSpaceSelect(option);
                      closeCityModal();
                      if (isCoworking) {
                        navigate(`/coworking/${activeCity.name}`);
                      }
                    }}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-3 flex items-center justify-center bg-white transition group-hover:scale-105">
                      {isCoworking ? (
                        <img 
                          src={activeCity.imgage} 
                          alt={`${activeCity.name} Coworking Space`} 
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-blue-50 flex items-center justify-center text-3xl text-[#007bff]">
                          🏢
                        </div>
                      )}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#007bff] transition-colors">
                      {isCoworking ? 'Coworking Space' : 'Virtual Office'}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Homepage;
