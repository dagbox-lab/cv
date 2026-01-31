import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Concepteur web départemental",
    company: "Faculté de théologie - Université de Genève",
    period: "févr. 2018 - aujourd’hui",
    description: "Concepteur web départemental à 30%. Gestion stratégique et opérationnelle de la communication web.",
    companyUrl: "https://www.unige.ch/theologie/"
  },
  {
    id: 2,
    role: "Concepteur web départemental",
    company: "Global Studies Institute (GSI) – Université de Genève",
    period: "nov. 2015 - aujourd’hui",
    description: "Concepteur web départemental à 50%. Développement et maintenance du site, support web.",
    companyUrl: "https://www.unige.ch/gsi/"
  },
  {
    id: 3,
    role: "Assistant communication",
    company: "Théâtre de Carouge-Atelier de Genève",
    period: "août 2014 - févr. 2015",
    description: "Veille et optimisation du site Internet et des réseaux sociaux. Réalisation de la revue de presse. Montage et postage des vidéos promotionnelles.",
    companyUrl: "https://theatredecarouge.ch/"
  },
  {
    id: 4,
    role: "Assistant technique",
    company: "HEG-Genève",
    period: "janv. 2013 - déc. 2013",
    description: "Permanence pour la communication web officielle de l’Etat de Genève (www.geneve.ch). Exploitation, développement technique, conception graphique et réalisation de mandats.",
    companyUrl: "https://www.hesge.ch/heg/recherche/recherche-appliquee/laboratoire-des-technologies-information-lti#presentation"
  },
  {
    id: 5,
    role: "Webmaster - design",
    company: "Geneva Tourism & Conventions",
    period: "oct. 2005 - juil. 2012",
    description: "Gestion et développement du site de Genève Tourisme & Congrès. Stratégie web, réseaux sociaux, SEO, réalisation de campagnes marketing, newsletters, et création graphique multimédia (vidéo, print).",
    companyUrl: "https://www.geneve.com/fr"
  },
  {
    id: 6,
    role: "Assistant de production au Laboratoire des Technologies et de l'Information (LTI)",
    company: "HEG-Genève",
    period: "janv. 2004 - sept. 2005",
    description: "Permanence pour la mise en production des pages internet officielles de l’Etat de Genève. Exploitation, développement technique et conceptions graphiques.",
    companyUrl: "https://www.hesge.ch/heg/recherche/recherche-appliquee/laboratoire-des-technologies-information-lti#presentation"
  },
  {
    id: 7,
    role: "Collaborateur technique - Services généraux",
    company: "Richemont",
    period: "1997 - 2001",
    description: "Responsable de chantier pour la rénovation de 3 étages. Planification, suivi des travaux, contrôle financier et supervision des déménagements.",
    companyUrl: "https://www.richemont.com/"
  }
];

export const ExperienceList: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Briefcase size={24} />
        </div>
        <h2 className="text-xl font-display font-semibold text-primary">Expérience</h2>
      </div>
      
      <div className="flex flex-col ml-2">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="group flex flex-col gap-2 relative pl-6 border-l border-zinc-800 pb-8 last:pb-0 last:border-l-0">
             {/* Timeline dot */}
             <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-background group-hover:bg-accent group-hover:scale-110 transition-all duration-300"></span>
             
             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-zinc-100 font-medium text-lg group-hover:text-accent transition-colors duration-300">{exp.role}</h3>
                <span className="text-sm text-zinc-500 font-mono bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800/50 whitespace-nowrap">{exp.period}</span>
             </div>
             
             {exp.companyUrl ? (
               <a 
                 href={exp.companyUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-base text-blue-400 font-medium hover:text-blue-300 hover:underline decoration-blue-400/30 underline-offset-4 transition-all duration-300 w-fit"
               >
                 {exp.company}
               </a>
             ) : (
               <p className="text-base text-zinc-400 font-medium">{exp.company}</p>
             )}
             
             <p className="text-sm text-zinc-500 mt-2 leading-relaxed max-w-2xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};