import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import expertImg from '../assets/expert.jpg';
import QuoteModal from '../components/QuoteModal.jsx';
import { enquiryFormConfig } from '../home/homedata.js';
import {
  getVirtualOfficeCity,
  virtualOfficeContent as content,
  virtualOfficeHeroImage
} from './virtual.js';

const inputClass =
  'w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors';

const CheckIcon = ({ className = 'w-5 h-5 text-orange-500' }) => (
  <svg className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/**
 * Virtual Office page for one city (route: /virtual-office/:city).
 * All text comes from virtual.js; enquiries are mailed to enquiryFormConfig.contactEmail.
 */
const VirtualOfficePage = ({ citySlug }) => {
  const city = getVirtualOfficeCity(citySlug);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteLocation, setQuoteLocation] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!city) {
    return (
      <main className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Virtual office city not found</h1>
        <Link to="/" className="text-orange-600 font-semibold hover:underline">Back to home</Link>
      </main>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'phone' ? value.replace(/\D/g, '') : value }));
  };

  const handleSubmit = (e, intent = content.form.primaryButton) => {
    e.preventDefault();
    const next = {};
    if (!formData.name.trim()) next.name = 'This field can not be blank.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) next.email = 'Enter a valid email address.';
    if (!/^\d{10}$/.test(formData.phone)) next.phone = 'Enter a valid 10 digit mobile number.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Virtual Office ${intent} - ${city.name}`);
    const body = encodeURIComponent(
      `New Virtual Office Enquiry:\n\n` +
      `City: ${city.name}\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: +91 ${formData.phone}\n` +
      `Submission Date: ${new Date().toLocaleString()}\n`
    );
    setIsSubmitted(true);
    window.location.href = `mailto:${enquiryFormConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="w-full bg-white antialiased font-sans flex flex-col">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: `url(${virtualOfficeHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="text-white">
            <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/80 flex items-center gap-1.5 flex-wrap">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span>Virtual Office</span>
              <span>›</span>
              <span className="font-bold text-white">{city.name}</span>
            </nav>

            <div className="flex items-center gap-3 mt-5">
              <img src={city.image} alt={`${city.name} city`} className="w-14 h-14 rounded-full object-cover border-2 border-orange-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">{city.state}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight mt-3">
              {content.hero.titlePrefix} <span className="text-amber-300">{city.name}</span> {content.hero.titleSuffix}
            </h1>
            <p className="text-sm sm:text-base text-white/85 mt-4 max-w-xl leading-relaxed">{content.hero.subtitle(city)}</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
              {content.hero.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm sm:text-[15px] font-medium">
                  <CheckIcon className="w-5 h-5 text-orange-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: enquiry card */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">{content.form.title(city)}</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{content.form.subtitle}</p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center mt-4">
                <div className="text-3xl mb-1">✅</div>
                <h3 className="text-sm font-bold text-slate-900">Enquiry Forwarded!</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Your request has been forwarded to <span className="font-semibold text-orange-600">{enquiryFormConfig.contactEmail}</span>. Our team will contact you shortly.
                </p>
                <button type="button" onClick={() => setIsSubmitted(false)} className="mt-3 text-xs text-orange-600 hover:underline font-semibold cursor-pointer">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 mt-4">
                <div>
                  <input type="text" name="name" placeholder={content.form.placeholders.name} value={formData.name} onChange={handleChange} className={inputClass} />
                  {errors.name && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name}</span>}
                </div>
                <div>
                  <input type="email" name="email" placeholder={content.form.placeholders.email} value={formData.email} onChange={handleChange} className={inputClass} />
                  {errors.email && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>}
                </div>
                <div>
                  <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:border-orange-500 transition-colors">
                    <span className="px-3 py-2.5 bg-slate-50 text-slate-600 text-sm font-semibold border-r border-slate-200 select-none">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={content.form.placeholders.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      className="flex-1 min-w-0 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                  {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button
                    type="submit"
                    className="bg-[#ff5f00] hover:bg-[#e65600] active:scale-[0.98] text-white font-bold py-2.5 rounded-lg text-sm shadow-xs transition-all cursor-pointer"
                  >
                    {content.form.primaryButton}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, content.form.secondaryButton)}
                    className="bg-white border border-[#0b1b4d] text-[#0b1b4d] hover:bg-slate-50 active:scale-[0.98] font-bold py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    {content.form.secondaryButton}
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center gap-3 mt-5">
              <img src={expertImg} alt="Space expert" className="w-12 h-12 rounded-full object-cover object-top border border-slate-200 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm text-slate-600 font-medium">{content.form.expertLabel}</span>
                <a href={`tel:${content.form.phone.replace(/\s/g, '')}`} className="text-sm font-bold text-slate-900 hover:text-orange-600">
                  {content.form.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUB-LOCATIONS ================= */}
      <section aria-label="Virtual office locations" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{content.locations.title(city)}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {city.subLocations.map((location) => (
            <article key={location} className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-2xs hover:shadow-lg hover:-translate-y-0.5 hover:border-orange-300 transition-all">
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-lg">📍</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{location}</h3>
                    <p className="text-xs text-slate-500">{city.name}, {city.state}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.locations.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700">
                      <CheckIcon className="w-3.5 h-3.5 text-orange-500" />
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-dashed border-slate-200">
                  <span className="text-sm font-bold text-slate-900">{content.locations.priceText}</span>
                  <button
                    type="button"
                    onClick={() => setQuoteLocation(location)}
                    className="inline-flex items-center gap-1.5 bg-[#ff5f00] hover:bg-[#e65600] active:scale-[0.97] text-white font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    {content.locations.button}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {quoteLocation && (
        <QuoteModal
          space={{ name: `Virtual Office - ${quoteLocation}, ${city.name}`, location: `${quoteLocation}, ${city.name}` }}
          onClose={() => setQuoteLocation(null)} />
      )}
    </main>
  );
};

// Keyed by city so form state and scroll position reset when the city changes
const VirtualOffice = () => {
  const { city } = useParams();
  return <VirtualOfficePage key={city} citySlug={city} />;
};

export default VirtualOffice;
