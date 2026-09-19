const CityGrid = ({ cities = [], selectedCity = '', onCitySelect }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-2.5 sm:gap-x-3 gap-y-1.5 sm:gap-y-2 pt-1">
      {cities.map((city) => {
        const isSelected = selectedCity === city.name;
        return (
          <button 
            type="button" 
            key={city.name} 
            onClick={() => onCitySelect && onCitySelect(city, true)} 
            className="group flex flex-col items-center cursor-pointer transition-transform transform active:scale-95 focus:outline-none"
          >
            <div className={`relative w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 xl:w-15 xl:h-15 rounded-full overflow-hidden border-2 sm:border-[3px] bg-slate-100 transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:-translate-y-0.5 ${
              isSelected 
                ? 'border-[#007bff] ring-2 ring-[#007bff]/25 shadow-blue-500/20 scale-105' 
                : 'border-white group-hover:border-[#007bff]/60 group-hover:ring-2 group-hover:ring-[#007bff]/15'
            }`}>
              <img 
                src={city.image} 
                alt={`${city.name} workspace`} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
              />
              {/* Subtle glossy overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className={`mt-0.5 text-[10px] sm:text-xs font-semibold text-center tracking-tight transition-colors duration-200 ${
              isSelected ? 'text-[#007bff] font-bold' : 'text-slate-700 group-hover:text-[#007bff]'
            }`}>
              {city.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CityGrid;
