import React from 'react';
import { delhiAreas, delhiSpaces } from './delhiData.js';

const Delhi = () => {
  return (
    <div className="w-full min-h-screen p-6 bg-white text-slate-800">
      <h1 className="text-3xl font-extrabold mb-4">Coworking Spaces in Delhi</h1>
      <p className="text-slate-600 mb-6">Explore flexible coworking and office solutions across Delhi.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {delhiAreas.map((area) => (
          <span key={area} className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700">
            {area}
          </span>
        ))}
      </div>
      <div className="text-sm text-slate-500">
        Available spaces: {delhiSpaces.length}
      </div>
    </div>
  );
};

export default Delhi;
