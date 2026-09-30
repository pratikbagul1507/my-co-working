import { useState } from 'react';
import {
  cityNames as availableCities,
  spaceOptions as availableSpaceTypes,
  enquiryFormConfig
} from './images/homedata.js';

const inputClass =
  'w-full h-10 sm:h-11 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500';

const emptyForm = { name: '', email: '', phone: '', spaceType: '', city: '' };

/**
 * Standalone lead enquiry form (same fields as the hero form) with its own state.
 * Enquiries are mailed to enquiryFormConfig.contactEmail.
 */
const EnquiryCard = ({ heading = 'Get a Free Quote' }) => {
  const [formData, setFormData] = useState(emptyForm);
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
    setFormData(emptyForm);
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
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder={enquiryFormConfig.placeholders.email}
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder={enquiryFormConfig.placeholders.phone}
        value={formData.phone}
        onChange={handleChange}
        required
        className={inputClass}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          name="spaceType"
          value={formData.spaceType}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
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
          className={inputClass}
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

export default EnquiryCard;
