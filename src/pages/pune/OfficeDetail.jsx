import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPuneOfficeCardById } from './puneData.js';

/**
 * Coworking Office Details Page
 * Displays multi-image gallery with hover-zoom and full-screen popup lightbox carousel.
 * Below the gallery: Seating Plans, Enquiry Form, and Horizontal Trusted By Top Companies bar.
 */
const OfficeDetail = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Enquiry Form State (All fields initially empty)
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    seats: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSpace(getPuneOfficeCardById(id));
  }, [id]);

  const images = space?.images || [];

  const openCarousel = (index = 0) => {
    setActiveImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => setIsCarouselOpen(false);

  const prevImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for carousel (Escape to close, Arrows to navigate)
  useEffect(() => {
    if (!isCarouselOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCarousel();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCarouselOpen, images.length]);

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectPlan = (planTitle) => {
    setFormData((prev) => ({ ...prev, type: planTitle }));
    if (formErrors.type) {
      setFormErrors((prev) => ({ ...prev, type: '' }));
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'This field can not be blank.';
    if (!formData.email.trim()) errors.email = 'This field can not be blank.';
    if (!formData.phone.trim()) errors.phone = 'This field can not be blank.';
    if (!formData.type) errors.type = 'This field can not be blank.';
    if (!formData.seats) errors.seats = 'This field can not be blank.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);

    // Forward enquiry details to info@mycoworking.in via mailto
    const subject = encodeURIComponent(`Coworking Enquiry for ${space?.name || 'Office'} - ${formData.type}`);
    const body = encodeURIComponent(
      `Property: ${space?.name || ''} (${space?.location || ''})\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: +91 ${formData.phone}\n` +
      `Workspace Type: ${formData.type}\n` +
      `Number of Seats: ${formData.seats}\n` +
      `Enquiry Date: ${new Date().toLocaleString()}\n`
    );
    window.location.href = `mailto:info@mycoworking.in?subject=${subject}&body=${body}`;
  };

  if (!space) {
    return (
      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Office Space Not Found</h1>
        <p className="text-sm text-slate-500 mb-6">The requested coworking space could not be found.</p>
        <Link
          to="/coworking/pune"
          className="bg-[#007bff] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-colors"
        >
          Back to Pune Coworking Spaces
        </Link>
      </main>
    );
  }

  // 3 Seating Plans sourced from this particular card
  const seatingPlans = [
    {
      title: 'Dedicated Desk',
      description: 'Fixed workspace in a Coworking Office with all amenities',
      seating: 'Seating : 1 - 100+ Seats',
      price: `${space.price}/* seat`,
      image: images[1] || images[0]
    },
    {
      title: 'Private Cabin',
      description: 'Ready to move fully furnished private office with all amenities',
      seating: 'Seating : 4, 6, 8, 10+ (Customization Available)',
      price: '₹9,999/* seat',
      image: images[2] || images[0]
    },
    {
      title: 'Virtual Office',
      description: 'Build your Company presence with Virtual Office in any city across India',
      seating: 'Company Registration & Mailing Address',
      price: '₹19,999/* year',
      image: images[3] || images[0]
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white antialiased font-sans flex flex-col pb-16">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[2cm] py-3 sm:py-4 flex flex-col gap-4 sm:gap-5">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="shrink-0">
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/coworking/pune" className="hover:text-blue-600 transition-colors">Coworking</Link></li>
            <li>/</li>
            <li className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-md">{space.name}</li>
          </ol>
        </nav>

        {/* Header: Office Title, Location & Price */}
        <header className="flex flex-row items-end justify-between gap-3 pb-2 border-b border-slate-100 shrink-0">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight truncate" title={space.name}>
              {space.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 truncate">{space.location}</p>
          </div>
          <div className="flex flex-col items-end justify-center shrink-0">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-none">Starting</span>
            <div className="text-lg sm:text-2xl font-extrabold text-[#007bff] leading-tight">
              {space.price}<span className="text-xs sm:text-sm text-slate-600 font-normal"> / Month</span>
            </div>
          </div>
        </header>

        {/* Gallery Grid (Zoom-on-Hover) */}
        <section aria-label="Office image gallery" className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3 h-[320px] sm:h-[400px] md:h-[460px] select-none shrink-0">
          {/* 1. Large Left Image */}
          <div
            onClick={() => openCarousel(0)}
            className="group relative md:col-span-6 h-full min-h-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={images[0]}
              alt={`${space.name} 1`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
          </div>

          {/* 2. Middle Stacked 2 Images */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-2.5 sm:gap-3 h-full min-h-0">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                onClick={() => openCarousel(idx)}
                className="group relative h-full min-h-0 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
              >
                <img
                  src={images[idx] || images[0]}
                  alt={`${space.name} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
            ))}
          </div>

          {/* 3. Right Tall Image with View All Photos Button */}
          <div
            onClick={() => openCarousel(3)}
            className="group relative md:col-span-3 h-full min-h-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-2xs"
          >
            <img
              src={images[3] || images[0]}
              alt={`${space.name} 4`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* View All Photos Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openCarousel(0);
              }}
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>📷</span>
              <span>View All Photos ({images.length})</span>
            </button>
          </div>
        </section>

        {/* Quick Highlights / CTA */}
        <section className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
            {space.badge && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-amber-50 text-amber-700 font-semibold text-xs border border-amber-200">
                👑 {space.badge}
              </span>
            )}
            {space.rating && (
              <span className="font-semibold text-slate-800">
                <span className="text-amber-500">★</span> {space.rating} / 5.0 Rating
              </span>
            )}
            <span className="text-slate-400">•</span>
            <span>Verified Coworking Space</span>
          </div>

          <button
            type="button"
            onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#007bff] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 rounded-lg shadow-xs transition-all cursor-pointer"
          >
            {space.ctaText || 'Get Quote'}
          </button>
        </section>

        {/* Top Trust Ribbon */}
        <section className="bg-white rounded-xl border border-slate-200/80 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-base sm:text-lg">👑</span>
            <span className="font-bold text-slate-800 text-xs sm:text-sm">Premium Coworking</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 text-center flex-1 min-w-[200px]">
            The Largest Network of Flex Workspaces in India
          </p>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800">
            <span>5.0</span>
            <span className="text-amber-400 tracking-tight">★★★★★</span>
          </div>
        </section>

        {/* Main 2-Column Area: Seating Plans (Left) & Enquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-1">
          
          {/* Left Column: Seating Plans Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Seating Plans
            </h2>

            <div className="flex flex-col gap-3.5">
              {seatingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-300 transition-colors p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  {/* Left Plan Image */}
                  <div className="w-full sm:w-44 h-32 sm:h-28 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Center Details */}
                  <div className="flex-1 min-w-0 text-left w-full sm:w-auto">
                    <h3 className="text-base font-bold text-slate-900">{plan.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{plan.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2 font-medium">
                      <span>👤</span>
                      <span>{plan.seating}</span>
                    </div>
                  </div>

                  {/* Right Price & Enquire Button */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto shrink-0 gap-2 sm:gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-none">
                      {plan.price}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectPlan(plan.title)}
                      className="border border-[#007bff] text-[#007bff] hover:bg-[#007bff] hover:text-white active:scale-95 text-xs font-semibold px-4 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-4">
            <div ref={formRef} className="sticky top-24 z-20 bg-[#eef7ff] border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Interested in this Property
              </h3>
              <p className="text-xs text-slate-500 mb-4 mt-0.5">
                Fill your details for a customized quote
              </p>

              {isSubmitted ? (
                <div className="bg-white/95 border border-green-200 rounded-xl p-4 text-center my-2 shadow-2xs">
                  <div className="text-2xl mb-1">✅</div>
                  <h4 className="text-sm font-bold text-slate-900">Enquiry Forwarded!</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Your request has been forwarded to <span className="font-semibold text-blue-600">info@mycoworking.in</span>. Our team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', type: '', seats: '' });
                    }}
                    className="mt-3 text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-3">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Phone Field with +91 Prefix */}
                  <div>
                    <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                      <span className="px-3 py-2 bg-slate-50 text-slate-600 text-xs sm:text-sm font-semibold border-r border-slate-200 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={10}
                        className="flex-1 px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[10px] text-red-500 mt-0.5 block">{formErrors.phone}</span>
                    )}
                  </div>

                  {/* Dropdowns Row: Type & Seats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer transition-colors"
                      >
                        <option value="">Type</option>
                        <option value="Dedicated Desk">Dedicated Desk</option>
                        <option value="Private Cabin">Private Cabin</option>
                        <option value="Virtual Office">Virtual Office</option>
                        <option value="Managed Office">Managed Office</option>
                      </select>
                      {formErrors.type && (
                        <span className="text-[10px] text-red-500 mt-0.5 block leading-tight">{formErrors.type}</span>
                      )}
                    </div>

                    <div>
                      <select
                        name="seats"
                        value={formData.seats}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-xs text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer transition-colors"
                      >
                        <option value="">No. Of Seats</option>
                        <option value="1 - 5 Seats">1 - 5 Seats</option>
                        <option value="6 - 15 Seats">6 - 15 Seats</option>
                        <option value="16 - 50 Seats">16 - 50 Seats</option>
                        <option value="50 - 100 Seats">50 - 100 Seats</option>
                        <option value="100+ Seats">100+ Seats</option>
                      </select>
                      {formErrors.seats && (
                        <span className="text-[10px] text-red-500 mt-0.5 block leading-tight">{formErrors.seats}</span>
                      )}
                    </div>
                  </div>

                  {/* Enquire Now Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#007bff] hover:bg-blue-600 active:scale-[0.98] text-white font-semibold py-2.5 rounded-lg text-xs sm:text-sm shadow-xs transition-all cursor-pointer mt-1"
                  >
                    Enquire Now
                  </button>
                </form>
              )}

              {/* Connect with our space expert */}
              <div className="flex items-center gap-3 pt-3.5 border-t border-blue-200/60 mt-3.5">
                {/* Navbar logo badge beside contacts */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0 shadow-xs border border-slate-700 select-none">
                  <span className="text-xs font-black text-white tracking-tight">
                    my<span className="text-orange-500">c</span><span className="text-orange-500 font-black">.</span>
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                    Connect with our space expert
                  </span>
                  <a
                    href="mailto:info@mycoworking.in"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007bff] hover:underline truncate"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    info@mycoworking.in
                  </a>
                  <a
                    href="tel:+919028760011"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 mt-0.5"
                  >
                    <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z"/>
                    </svg>
                    +91 9028760011
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Top Companies - Fully Horizontal Spanning Left to Right */}
        <section aria-label="Trusted by top companies" className="w-full bg-[#f0f7ff] border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-xs mt-2">
          <h3 className="text-center text-sm sm:text-base font-bold text-slate-800 tracking-tight mb-4 sm:mb-5">
            Trusted by Top Companies
          </h3>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center justify-items-center select-none">
            {/* 1. INOX */}
            <div className="flex items-center gap-1 font-black text-lg tracking-wider text-[#003366]">
              <span>IN</span>
              <span className="text-amber-500 text-xl leading-none">★</span>
              <span>X</span>
            </div>

            {/* 2. Kotak */}
            <div className="flex items-center gap-1.5 font-bold text-sm text-[#003366]">
              <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-black">
                ∞
              </span>
              <span>kotak</span>
            </div>

            {/* 3. Razorpay */}
            <div className="flex items-center gap-1 font-extrabold text-sm text-[#0b5cff] italic">
              <span className="text-base not-italic">⚡</span>
              <span>Razorpay</span>
            </div>

            {/* 4. Doubtnut */}
            <div className="flex items-center gap-1 font-bold text-sm text-[#ff5722]">
              <span className="w-5 h-5 rounded-full bg-[#ff5722] text-white flex items-center justify-center text-[10px] font-black">
                ▶
              </span>
              <span>doubtnut</span>
            </div>

            {/* 5. CredAble */}
            <div className="font-extrabold text-xs sm:text-sm tracking-widest text-[#d97706] uppercase">
              CREDABLE
            </div>

            {/* 6. AccioJob */}
            <div className="flex items-center gap-1 font-bold text-xs sm:text-sm text-[#1e293b]">
              <span className="text-blue-600 text-sm font-black">⬡</span>
              <span>AccioJob</span>
            </div>

            {/* 7. Purplle */}
            <div className="flex items-center gap-0.5 font-black text-sm text-[#a21caf] italic">
              <span>purplle</span>
              <span className="text-amber-400 text-xs not-italic">✨</span>
            </div>

            {/* 8. Classplus */}
            <div className="flex items-center gap-1 font-bold text-xs sm:text-sm text-[#0284c7]">
              <span className="text-sm font-black">❯❯</span>
              <span>Classplus</span>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal Carousel (Popup on same screen) */}
      {isCarouselOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeCarousel}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 select-none h-screen max-h-screen h-[100dvh] max-h-[100dvh] overflow-hidden"
        >
          {/* Modal Header */}
          <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-20 shrink-0 py-1">
            <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/10 px-3 py-1 rounded-full">
              {activeImageIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={closeCarousel}
              aria-label="Close carousel"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-lg cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Modal Center: Active Image & Left/Right Arrows */}
          <div onClick={(e) => e.stopPropagation()} className="relative flex-1 min-h-0 w-full max-w-6xl mx-auto flex items-center justify-center my-auto overflow-hidden">
            {images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
              >
                ‹
              </button>
            )}

            {/* Standardized Image Stage: Fits 100% on screen in uniform format */}
            <div className="w-full h-full max-h-[66vh] sm:max-h-[70vh] flex items-center justify-center px-10 sm:px-16 overflow-hidden">
              <img
                src={images[activeImageIndex]}
                alt={`${space.name} photo ${activeImageIndex + 1}`}
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl select-none"
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
              >
                ›
              </button>
            )}
          </div>

          {/* Modal Bottom: Thumbnail Strip */}
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl mx-auto z-20 shrink-0 py-1.5 flex items-center justify-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-none">
            {images.map((imgUrl, idx) => (
              <button
                key={`thumb-${idx}`}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`shrink-0 w-12 h-9 sm:w-14 sm:h-10 rounded-md overflow-hidden transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'ring-2 ring-[#007bff] scale-105 opacity-100' : 'opacity-40 hover:opacity-85'
                }`}
              >
                <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default OfficeDetail;
