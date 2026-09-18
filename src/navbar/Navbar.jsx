import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState(null);
  const navRef = useRef(null);

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

  const navItems = [
    { name: 'Coworking', links: ['#hot-desk', '#dedicated-desk', '#private-cabin'] },
    { name: 'Virtual Office', links: ['#gst-registration', '#business-address', '#mailing-address'] },
    { name: 'Business Services', links: ['#company-registration', '#accounting', '#legal-compliance'] },
    { name: 'Business Plans', links: ['#enterprise', '#startup', '#freelancer'] }
  ];

  return (
    <header ref={navRef} className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 select-none shadow-2xs">
      {/* 1. Mobile & Desktop Header: strictly single row, flex-row, justify-between, items-center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex flex-row justify-between items-center">
        
        {/* 2. Far Left: Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center cursor-pointer shrink-0"
        >
          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            my<span className="text-orange-500">coworking</span>
            <span className="text-orange-500 text-2xl sm:text-3xl font-extrabold leading-none">.</span>
          </span>
        </Link>

        {/* 3. Desktop Contact Info Box: hidden on mobile (< xl), visible on wide screens */}
        <div className="hidden xl:flex items-center border border-slate-200 rounded-lg px-3 py-1.5 space-x-3 text-xs font-medium text-slate-700 shrink-0">
          <a href="tel:+919028760011" className="flex items-center space-x-1.5 hover:text-blue-600 transition-colors border-r border-slate-200 pr-3">
            <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z"/>
            </svg>
            <span className="font-semibold">9028 760011</span>
          </a>
          <a href="mailto:info@mycoworking.in" className="flex items-center space-x-1.5 hover:text-blue-600 transition-colors">
            <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>info@mycoworking.in</span>
          </a>
        </div>

        {/* 3. Middle Tabs: Desktop only (hidden on mobile views, visible on lg and above) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center space-x-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors focus:outline-none cursor-pointer py-2 whitespace-nowrap"
              >
                <span>{item.name}</span>
                <svg 
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`} 
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
                <div className="absolute left-0 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {item.links.map((link) => (
                    <Link
                      key={link}
                      to={item.name === 'Coworking' ? '/coworking' : link}
                      className="block px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
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
          {/* Blue "Contact Us" button - always visible */}
          <button 
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors shadow-xs tracking-wide cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </button>

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
                  <div className="pl-3 pt-2 pb-1 flex flex-col space-y-2">
                    {item.links.map((link) => (
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
                9028 760011
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
