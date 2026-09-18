import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundHero from './images/cityimages/navbarimage.png';
import { cityNames, spaceOptions } from './images/imagesdata.js';
import CityGrid from '../components/city/CityGrid';
import CityPopup from '../components/city/CityPopup';

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

  const handlePopupSpaceSelect = (option, city) => {
    handleSpaceSelect(option);
    closeCityModal();
    if (option === 'Coworking Spaces') {
      navigate(`/coworking/${city.name}`);
    }
  };

  return (
    <main className="w-full h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] overflow-hidden bg-[#f8fafc] flex flex-col antialiased font-sans select-none">
      <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Column: Heading, Dropdowns, Search Button, Cities Grid */}
        <section className="w-full md:w-1/2 h-full px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col">
            <div className="w-7 h-7 bg-amber-400 rounded-full mb-2 sm:mb-2.5 shadow-[5px_5px_0_#0f172a]"></div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-1 sm:mb-1.5">India's flexible workspace network</p>
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-slate-900 tracking-tight mb-2.5 sm:mb-3 leading-[1.12]">
              Choose from <span className="text-[#007bff]">10,000+</span><br />
              spaces to <span className="text-[#007bff]">Work & Live</span>
            </h1>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 max-w-xl">
              <label className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-col bg-white shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">Looking For</span>
                <select 
                  value={lookingFor} 
                  onChange={(event) => handleSpaceSelect(event.target.value)}
                  className="text-xs sm:text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  {spaceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              
              <label className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-col bg-white shadow-xs">
                <span className="text-[10px] font-semibold text-slate-400 leading-tight">Select City</span>
                <select 
                  value={selectedCity} 
                  onChange={handleCityChange}
                  className="text-xs sm:text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
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
              className="w-fit bg-[#007bff] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-1.5 transition-colors mb-2.5 sm:mb-3 shadow-xs cursor-pointer active:scale-95"
            >
              Search spaces <span aria-hidden="true">→</span>
            </button>
          </div>
          
          <CityGrid 
            cities={cityNames} 
            selectedCity={selectedCity} 
            onCitySelect={(city) => handleCitySelect(city, true)} 
          />
        </section>

        {/* Right Column: Hero Background, Stats & Form */}
        <section 
          className="w-full md:w-1/2 h-full bg-cover bg-center relative flex flex-col items-center justify-center px-4 py-4 sm:px-6 lg:px-10 overflow-hidden" 
          style={{ backgroundImage: `url(${backgroundHero})` }}
        >
          <div className="absolute inset-0 bg-slate-950/25"></div>

          {/* Stats header matching reference image */}
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
          
          {/* Search / Enquiry Form matching reference image */}
          <form onSubmit={handleSubmit} className="w-full max-w-[400px] sm:max-w-[430px] relative z-10 flex flex-col gap-2 sm:gap-2.5">
            {/* Row 1: Name */}
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Your Name" 
              value={formData.name} 
              onChange={handleInput} 
              required 
              className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
            />
            
            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter Your Email" 
                value={formData.email} 
                onChange={handleInput} 
                required 
                className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
              />
              
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
                  value={formData.phone} 
                  onChange={handleInput} 
                  required 
                  className="w-full h-full bg-transparent text-slate-800 placeholder-[#75848a] text-xs sm:text-sm pl-2 focus:outline-none" 
                />
              </div>
            </div>
            
            {/* Row 3: Type of Space & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div className="relative w-full">
                <select 
                  name="spaceType" 
                  value={formData.spaceType} 
                  onChange={(event) => handleSpaceSelect(event.target.value)}
                  className="w-full h-9 sm:h-10 bg-white text-slate-800 text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 pr-7 focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff] appearance-none cursor-pointer shadow-xs"
                >
                  <option value="">Type Of Space</option>
                  {spaceOptions.map((option) => (
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
                value={formData.city} 
                onChange={handleInput} 
                list="city-options-list"
                className="w-full h-9 sm:h-10 bg-white text-slate-800 placeholder-[#75848a] text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-3 shadow-xs focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]" 
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
              className="w-fit bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm border border-[#cfd4d9] rounded-[3px] px-5 py-2 shadow-xs transition-colors cursor-pointer active:scale-95 mt-0.5"
            >
              {submitted ? 'Submitted' : 'Submit'}
            </button>
            
            {submitted && (
              <p className="text-xs font-semibold text-white bg-green-600/90 py-1.5 px-3 rounded-[3px] w-fit shadow-md" role="status">
                Thanks, {formData.name || 'there'}! We'll be in touch shortly.
              </p>
            )}
          </form>
        </section>
      </div>

      <CityPopup
        activeCity={activeCity}
        onClose={closeCityModal}
        onSelectSpace={handlePopupSpaceSelect}
        spaceOptions={spaceOptions}
      />
    </main>
  );
};

export default Homepage;
