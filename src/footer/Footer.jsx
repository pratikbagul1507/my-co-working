import { Link } from 'react-router-dom';
import footerLogo from './company-logo-footer.png';
import { navItems, navLinkLabel, navLinkTarget, footerQuickLinksData } from './footerdata.js';

/**
 * Site footer: brand summary, navbar quick links and the top-cities directory.
 *
 * @param {Function} onCityClick - called with a city name when a city link is clicked
 */
const Footer = ({ onCityClick }) => {
  return (
    <footer 
      aria-label="Footer Directory and Quick Links" 
      className="w-full bg-black text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-900 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-16 items-start">
          
          {/* Left (wide): transparent logo straight on the black footer + platform summary */}
          <div className="flex flex-col items-start">
            <img src={footerLogo} alt="MyCoworking" className="h-24 sm:h-28 w-auto object-contain mb-3" />
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-none">
              {footerQuickLinksData.brand.description}
            </p>
          </div>

          {/* Right: Quick links - every navbar tab with its links; clicking jumps to the top of the page */}
          <div className="flex flex-col lg:justify-self-end w-full lg:w-[220px]">
            <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight mb-4">
              Quick links
            </h4>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <span className="text-white/90 font-semibold text-sm mb-2.5">{item.name}</span>
                  <ul className="flex flex-col space-y-2">
                    {item.links.map((link) => (
                      <li key={link}>
                        <Link
                          to={navLinkTarget(item, link)}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="text-xs sm:text-sm text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5 group"
                        >
                          <span className="text-slate-500 group-hover:text-orange-400 transition-colors text-[10px]">›</span>
                          <span>{navLinkLabel(link)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Horizontal line, then the city links paragraph, then copyright */}
        <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-slate-800">
        {/* Top Coworking Space in India: all city links as one inline paragraph */}
        <div className="flex flex-col mt-5 sm:mt-6">
          <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight mb-3 sm:mb-4">
            Top Coworking Space in India
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-loose">
            {footerQuickLinksData.columns.flatMap((column) => column.cities).map((cityName, index, all) => (
              <span key={cityName}>
                <button
                  type="button"
                  onClick={() => onCityClick(cityName)}
                  className="hover:text-white hover:underline transition-colors cursor-pointer focus:outline-none"
                >
                  {cityName}
                </button>
                {index < all.length - 1 && <span className="text-slate-500 mx-2">|</span>}
              </span>
            ))}
          </p>
        </div>

        </div>
        <div className="pt-4 mt-5 sm:mt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MyCoworking. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            India's flexible workspace network across 18+ cities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
