import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization.",
    tags: ["React", "D3.js"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "E-commerce API",
    description: "Headless commerce solution built with Node.js.",
    tags: ["Node", "GraphQL"],
    image: "https://picsum.photos/600/400?random=2"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
       <div className="flex items-center justify-between mb-4 px-6 pt-6">
        <h2 className="text-xl font-display font-semibold text-primary">Projets Récents</h2>
        <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
            <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Grid layout for projects to sit side-by-side on wide cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-6">
        {featuredProjects.map((project) => (
            <div key={project.id} className="group relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-800">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-white font-medium text-lg">{project.title}</h3>
                    <p className="text-zinc-300 text-xs">{project.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};