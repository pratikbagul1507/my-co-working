const defaultSpaceOptions = ['Coworking Spaces', 'Virtual Office Space'];

const CityPopup = ({
  activeCity,
  onClose,
  onSelectSpace,
  spaceOptions = defaultSpaceOptions
}) => {
  if (!activeCity) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4" 
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="city-modal-title"
        className="relative w-full max-w-lg rounded-2xl bg-white px-6 py-10 text-center shadow-2xl sm:px-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button 
          type="button" 
          onClick={onClose} 
          aria-label="Close city options" 
          className="absolute right-4 top-4 text-2xl leading-none text-slate-400 hover:text-slate-900 cursor-pointer"
        >
          ×
        </button>
        <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-amber-50 shadow-sm">
          <img src={activeCity.image} alt={`${activeCity.name} city`} className="h-full w-full object-cover" />
        </div>
        <h2 id="city-modal-title" className="text-xl font-bold text-slate-900 sm:text-2xl">
          Find the best spaces in {activeCity.name}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
          {spaceOptions.map((option) => {
            const isCoworking = option === 'Coworking Spaces';
            return (
              <button
                type="button"
                key={option}
                onClick={() => onSelectSpace && onSelectSpace(option, activeCity)}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-3 flex items-center justify-center bg-white transition group-hover:scale-105">
                  {isCoworking ? (
                    <img 
                      src={activeCity.image} 
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
  );
};

export default CityPopup;
