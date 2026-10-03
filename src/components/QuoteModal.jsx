import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import expertImg from '../assets/expert.jpg';
import { enquiryFormConfig } from '../home/homedata.js';

const POINTS = ['Customized Workspaces', 'Prime Locations', 'Free Guided Tours', 'Flexible Terms'];
const COMPANIES = ['INOX', 'Kotak', 'Razorpay', 'doubtnut', 'CREDABLE', 'AccioJob', 'Purplle', 'Classplus', 'Hector'];
const SPACE_TYPES = ['Hot Desk', 'Dedicated Desk', 'Private Cabin', 'Virtual Office'];
const SEAT_OPTIONS = ['1 - 5 Seats', '6 - 15 Seats', '16 - 50 Seats', '50 - 100 Seats', '100+ Seats'];

const inputClass =
  'w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors';

const emptyForm = { name: '', email: '', phone: '', type: '', seats: '' };

/**
 * "Get Quote" popup: opens over the page from any card's Get Quote button.
 * Submitting mails the enquiry to enquiryFormConfig.contactEmail (same as every other form on the site).
 *
 * @param {object} space - the card the quote is for (name / location used in the email)
 * @param {Function} onClose - called when the popup is dismissed
 */
const QuoteModal = ({ space, onClose }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'phone' ? value.replace(/\D/g, '') : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!formData.name.trim()) next.name = 'This field can not be blank.';
    if (!/^\d{10}$/.test(formData.phone)) next.phone = 'Enter a valid 10 digit mobile number.';
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) next.email = 'Enter a valid email address.';
    if (!formData.type) next.type = 'Select a type.';
    if (!formData.seats) next.seats = 'Select seats.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Get Quote - ${space?.name || 'Coworking Space'} - ${formData.type}`);
    const body = encodeURIComponent(
      `Property: ${space?.name || ''} (${space?.location || space?.address || ''})\n` +
      `Client Name: ${formData.name}\n` +
      (formData.email.trim() ? `Email: ${formData.email}\n` : '') +
      `Phone: +91 ${formData.phone}\n` +
      `Workspace Type: ${formData.type}\n` +
      `Number of Seats: ${formData.seats}\n` +
      `Enquiry Date: ${new Date().toLocaleString()}\n`
    );
    setIsSubmitted(true);
    window.location.href = `mailto:${enquiryFormConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return createPortal(
    // stopPropagation: the card behind this popup navigates on click
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 sm:p-6 cursor-default"
      onClick={(e) => { e.stopPropagation(); if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Get a quote"
    >
      <div className="relative w-full max-w-[860px] max-h-[94vh] overflow-y-auto bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: pitch + trusted companies */}
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-sky-50 p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Find Your Perfect Office Now!</h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-snug">
              Our space experts will provide a customized quote with detailed inventory as per your needs.
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-4">
              {POINTS.map((p) => (
                <div key={p} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-800 font-medium leading-tight">
                  <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900">Trusted by top companies</h3>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {COMPANIES.map((c) => (
                <div key={c} className="bg-white/80 border border-white rounded-lg h-10 flex items-center justify-center text-[12px] font-bold text-slate-600 tracking-tight">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-6 sm:p-8 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 pr-8">Interested in this Property</h3>
          {space?.name && <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{space.name}</p>}

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center my-6">
              <div className="text-3xl mb-1">✅</div>
              <h4 className="text-sm font-bold text-slate-900">Enquiry Forwarded!</h4>
              <p className="text-xs text-slate-600 mt-1">
                Your request has been forwarded to <span className="font-semibold text-orange-600">{enquiryFormConfig.contactEmail}</span>. Our team will contact you shortly.
              </p>
              <button type="button" onClick={onClose} className="mt-3 text-xs text-orange-600 hover:underline font-semibold cursor-pointer">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5 mt-4">
              <div>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={inputClass} />
                {errors.name && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name}</span>}
              </div>
              <div>
                <input type="email" name="email" placeholder="Email Address (optional)" value={formData.email} onChange={handleChange} className={inputClass} />
                {errors.email && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>}
              </div>
              <div>
                <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:border-orange-500 transition-colors">
                  <span className="px-3 py-2.5 bg-slate-50 text-slate-600 text-sm font-semibold border-r border-slate-200 select-none">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="flex-1 min-w-0 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
                {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <select name="type" value={formData.type} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">Type</option>
                    {SPACE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.type && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.type}</span>}
                </div>
                <div>
                  <select name="seats" value={formData.seats} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">No. Of Seats</option>
                    {SEAT_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.seats && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.seats}</span>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff5f00] hover:bg-[#e65600] active:scale-[0.98] text-white font-bold tracking-wide uppercase py-3 rounded-xl text-sm shadow-xs transition-all cursor-pointer"
              >
                Get Quote
              </button>
            </form>
          )}

          <div className="flex items-center gap-3 mt-5">
            <img src={expertImg} alt="Space expert" className="w-14 h-14 rounded-full object-cover object-top shrink-0 border border-slate-200" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm text-slate-600 font-medium">Speak To our space expert</span>
              <a href="tel:+919028760011" className="text-sm font-bold text-slate-900 hover:text-orange-600">+91 9028760011</a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuoteModal;
