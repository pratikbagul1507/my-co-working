import React from 'react';
import { coimbatoreAreas, coimbatoreSpaces } from './coimbatoreData.js';

const Coimbatore = () => {
  return (
    <div className="w-full min-h-screen p-6 bg-white text-slate-800">
      <h1 className="text-3xl font-extrabold mb-4">Coworking Spaces in Coimbatore</h1>
      <p className="text-slate-600 mb-6">Explore flexible coworking and office solutions across Coimbatore.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {coimbatoreAreas.map((area) => (
          <span key={area} className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700">
            {area}
          </span>
        ))}
      </div>
      <div className="text-sm text-slate-500">
        Available spaces: {coimbatoreSpaces.length}
      </div>
    </div>
  );
};

export default Coimbatore;
