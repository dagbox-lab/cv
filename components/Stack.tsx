import React from 'react';
import { Layers } from 'lucide-react';

const mainTools = [
  "Suite Microsoft Office (Word, Excel, Powerpoint)",
  "Suite Adobe (Adobe Photoshop, Adobe Illustrator, Adobe Dreamweaver, notions de Adobe Première et d'Adobe After Effects)",
  "Davinci Resolve",
  "Formulaires Limesurvey"
];

const aiTools = [
  "Midjourney",
  "Google Gemini",
  "Google AI Studio",
  "ChatGPT",
  "Claude"
];

export const Stack: React.FC = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      
      {/* Main Tools Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Layers size={24} />
            </div>
            <h2 className="text-xl font-display font-semibold text-primary">Outils & applications</h2>
        </div>
        
        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Applications de bureautique, de graphisme et formulaires</h3>
        <div className="flex flex-wrap gap-2">
          {mainTools.map((tool, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors cursor-default text-left"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* AI Section */}
      <div>
        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Intelligence artificielle</h3>
        <div className="flex flex-wrap gap-2">
          {aiTools.map((tool, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};