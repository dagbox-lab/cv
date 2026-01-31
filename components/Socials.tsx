import React from 'react';
import { Linkedin, Instagram, Share2, Facebook } from 'lucide-react';

export const Socials: React.FC = () => {
  const socials = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/dagonzalez/", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/volta_xerox/", label: "Instagram" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Share2 size={24} />
        </div>
        <h2 className="text-xl font-display font-semibold text-primary">Réseaux</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all group"
          >
            <span className="text-zinc-400 group-hover:text-white transition-colors">{social.icon}</span>
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};