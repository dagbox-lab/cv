import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../types';

const educationList: EducationType[] = [
    {
        id: 1,
        degree: "Certificat de Postproduction, Animation, technologie interactive, vidéographie et effets spéciaux",
        institution: "Cadshool",
        period: "2014 – 2014",
    },
    {
        id: 2,
        degree: "Diplôme postproduction, Adobe Première, Post-production, vidéo",
        institution: "Cadschool",
        period: "2014 – 2014",
        description: "Niveau : Diplôme. Formation Base à Avancée"
    },
    {
        id: 3,
        degree: "After Effects, Post-production, vidéo",
        institution: "Cadschool",
        period: "2013 – 2013",
        description: "Niveau : Diplôme. Formation Base à Avancée"
    },
    {
        id: 4,
        degree: "Webdesigner, Internet, web",
        institution: "Nomades",
        period: "2002 – 2002",
        description: "Niveau : Certificat webdesigner"
    },
    {
        id: 5,
        degree: "Webdesigner",
        institution: "Nomades",
        period: "2002 – 2002",
        description: "Niveau : Certificat wepublisher"
    },
    {
        id: 6,
        degree: "Baccalauréat A2, Philosophie, lettres & langues",
        institution: "Académie de Grenoble",
        period: "1994 – 1994",
        description: "Niveau : Baccalauréat A2"
    },
    {
        id: 7,
        degree: "Diplôme",
        institution: "Ecole Supérieure de Commerce de Malagnou",
        period: "1989 – 1993",
    }
];

export const Education: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <GraduationCap size={24} />
        </div>
        <h2 className="text-xl font-display font-semibold text-primary">Formations</h2>
      </div>
      
      <div className="flex flex-col ml-2">
        {educationList.map((edu) => (
          <div key={edu.id} className="group flex flex-col gap-1 relative pl-6 border-l border-zinc-800 pb-8 last:pb-0 last:border-l-0">
             {/* Timeline dot */}
             <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-background group-hover:bg-indigo-500 transition-colors duration-300"></span>
             
             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-zinc-100 font-medium text-lg">{edu.degree}</h3>
                <span className="text-sm text-zinc-500 font-mono bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/50 whitespace-nowrap">{edu.period}</span>
             </div>
             
             <div className="text-base text-indigo-400 font-medium">{edu.institution}</div>
             
             {edu.description && (
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{edu.description}</p>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};