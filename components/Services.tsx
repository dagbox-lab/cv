import React from 'react';
import { Code, Layout, Smartphone, Wrench, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
         <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                <Sparkles size={24} />
            </div>
            <h2 className="text-xl font-display font-semibold text-primary">Services</h2>
         </div>

         <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Wrench size={20}/></div>
                <div>
                    <h3 className="text-sm font-medium text-zinc-200">Animation, gestion et mises à jour de sites internet</h3>
                    <p className="text-xs text-zinc-500">Utilisations de CMS (Concrete5)</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Layout size={20}/></div>
                <div>
                    <h3 className="text-sm font-medium text-zinc-200">UI/UX Design</h3>
                    <p className="text-xs text-zinc-500">Interfaces modernes</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Code size={20}/></div>
                <div>
                    <h3 className="text-sm font-medium text-zinc-200">Développement</h3>
                    <p className="text-xs text-zinc-500">Html, CSS, Notions de javascript</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><Smartphone size={20}/></div>
                <div>
                    <h3 className="text-sm font-medium text-zinc-200">Création de contenus pour les réseaux sociaux</h3>
                    <p className="text-xs text-zinc-500">Posts, images et vidéos</p>
                </div>
            </div>
         </div>
    </div>
  );
};