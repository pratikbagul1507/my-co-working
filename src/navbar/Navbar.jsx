import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cityNames } from '../home/homedata';
import logo from './company-logo.png';
import label from './label.jpg';
import { navItems } from './navLinks';
import { virtualOfficePath } from '../virtual/virtual';

// Tabs whose dropdown shows the city picker
const CITY_TABS = ['Coworking', 'Virtual Office'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Same behaviour as clicking a city on the home page: open that city's space-type popup
  const handleCityClick = (cityName, tabName) => {
    closeMenu();
    if (tabName === 'Virtual Office') {
      navigate(virtualOfficePath(cityName));
      return;
    }
    navigate('/', { state: { openCity: cityName } });
  };

  // City picker for the Coworking / Virtual Office tabs; each tab has its own heading and style
  const renderCityGrid = (tabName, cols) => {
    const isVirtual = tabName === 'Virtual Office';
    return (
      <div className={isVirtual ? 'rounded-lg bg-blue-50/60 p-3' : ''}>
        <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${isVirtual ? 'text-blue-700' : 'text-orange-600'}`}>
          {isVirtual ? 'Virtual Office in your city' : 'Coworking Spaces in your city'}
        </p>
        <div className={cols === 6 ? 'grid grid-cols-6 gap-x-3 gap-y-4' : 'grid grid-cols-3 gap-x-2 gap-y-3'}>
          {cityNames.map((city) => (
            <button
              key={city.name}
              type="button"
              onClick={() => handleCityClick(city.name, tabName)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <img
                src={city.image}
                alt={city.name}
                loading="lazy"
                className={isVirtual
                  ? 'w-14 h-14 rounded-xl object-cover border-2 border-blue-100 group-hover:border-blue-500 group-hover:scale-105 transition-all'
                  : 'w-14 h-14 rounded-full object-cover border-2 border-slate-100 group-hover:border-orange-400 group-hover:scale-105 transition-all'}
              />
              <span className={`text-[11px] font-semibold text-slate-700 text-center leading-tight ${isVirtual ? 'group-hover:text-blue-600' : 'group-hover:text-orange-600'}`}>{city.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileTab = (menu) => {
    setMobileExpandedTab(mobileExpandedTab === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpandedTab(null);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 select-none shadow-2xs">
      {/* 1. Mobile & Desktop Header: strictly single row, flex-row, justify-between, items-center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-28 flex flex-row justify-between items-center gap-4">
        
        {/* 2. Far Left: Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img src={logo} alt="mycoworking" className="h-12 sm:h-20 w-auto object-contain" />
        </Link>

        {/* 3. Desktop Contact Info Box: visible on large screens (lg+) */}
        <div className="hidden lg:flex items-center border border-slate-200 rounded-lg px-4 py-2.5 space-x-3 text-base font-medium text-slate-700 shrink-0">
          <a href="tel:+919028760011" className="flex items-center space-x-1.5 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z"/>
            </svg>
            <span className="font-semibold">+91 9028760011</span>
          </a>
        
        </div>

        {/* 3. Middle Tabs: Desktop only (hidden on mobile views, visible on lg and above) */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 mx-4 xl:mx-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center space-x-2 text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors focus:outline-none cursor-pointer py-4 px-2 whitespace-nowrap"
              >
                <span>{item.name}</span>
                <svg 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              {activeDropdown === item.name && (
                <div className={`absolute left-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 ${CITY_TABS.includes(item.name) ? 'w-[620px] p-5' : 'w-64 py-2'}`}>
                  {CITY_TABS.includes(item.name) ? (
                renderCityGrid(item.name, 6)
                  ) : item.links.map((link) => (
                    <Link
                      key={link}
                      to={item.name === 'Coworking' ? '/coworking' : link}
                      className="block px-5 py-3.5 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      {link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 2 & 4. Far Right: Blue "Contact Us" Button + Hamburger Menu Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Orange "List of Services" button - always visible */}
          <Link
            to="/#services"
            onClick={closeMenu}
            className="shrink-0 cursor-pointer"
          >
            <img src={label} alt="Discount offer - List of Services" className="h-14 sm:h-20 w-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform" />
          </Link>

          {/* 4. Hamburger Icon: three bars icon, visible on small screens (< lg) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none shrink-0"
          >
            {isOpen ? (
              /* Close (X) icon when open */
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Standard Hamburger (three bars) icon */
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* 5. Dropdown/Drawer Menu: Opens downwards when hamburger is clicked, containing all hidden tabs & contact details */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-slate-100 shadow-xl px-4 py-3 flex flex-col divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
          {/* All 4 Navigation Tabs */}
          {navItems.map((item) => {
            const isExpanded = mobileExpandedTab === item.name;
            return (
              <div key={item.name} className="py-2.5 first:pt-1 last:pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileTab(item.name)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-800 py-1 focus:outline-none cursor-pointer"
                >
                  <span>{item.name}</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#007bff]' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sub-links dropdown */}
                {isExpanded && (
                  <div className={CITY_TABS.includes(item.name) ? 'pt-3 pb-1' : 'pl-3 pt-2 pb-1 flex flex-col space-y-2'}>
                    {CITY_TABS.includes(item.name) ? (
                renderCityGrid(item.name, 3)
                    ) : item.links.map((link) => (
                      <Link
                        key={link}
                        to={item.name === 'Coworking' ? '/coworking' : link}
                        onClick={closeMenu}
                        className="text-xs text-slate-600 hover:text-[#007bff] py-1 font-medium transition-colors block"
                      >
                        {link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact Details in Mobile Menu */}
          <div className="pt-3 pb-1 flex flex-col gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-[#007bff] font-bold">📞 Phone:</span>
              <a href="tel:+919028760011" className="font-semibold text-slate-800 hover:text-blue-600">
                +91 9028760011
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#007bff] font-bold">✉️ Email:</span>
              <a href="mailto:info@mycoworking.in" className="font-semibold text-slate-800 hover:text-blue-600">
                info@mycoworking.in
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
