import React from 'react';
import { MapPin, Globe, Mail } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700 shadow-lg">
           <img 
            src="https://picsum.photos/200/200?grayscale" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold text-primary mb-2">David Gonzalez</h1>
          <p className="text-secondary text-lg leading-relaxed">
            Concepteur en communication web
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <MapPin size={16} />
          <span>Genève, Suisse</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <Globe size={16} />
          <span>Français, Espagnol, Anglais, notions d'Allemand</span>
        </div>
        <a href="mailto:gonzalez.david@protonmail.com" className="flex items-center gap-2 text-zinc-400 text-sm hover:text-white transition-colors">
          <Mail size={16} />
          <span>gonzalez.david@protonmail.com</span>
        </a>
      </div>
    </div>
  );
};