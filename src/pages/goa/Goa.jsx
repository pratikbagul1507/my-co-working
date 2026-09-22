import React from 'react';
import { goaAreas, goaSpaces } from './goaData.js';

const Goa = () => {
  return (
    <div className="w-full min-h-screen p-6 bg-white text-slate-800">
      <h1 className="text-3xl font-extrabold mb-4">Coworking Spaces in Goa</h1>
      <p className="text-slate-600 mb-6">Explore flexible coworking and office solutions across Goa.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {goaAreas.map((area) => (
          <span key={area} className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700">
            {area}
          </span>
        ))}
      </div>
      <div className="text-sm text-slate-500">
        Available spaces: {goaSpaces.length}
      </div>
    </div>
  );
};

export default Goa;
