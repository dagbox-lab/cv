import React from 'react';

export const Status: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex flex-col">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Disponibilité</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Open to Work
        </span>
      </div>
      <div className="text-3xl">🚀</div>
    </div>
  );
};