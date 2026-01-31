import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const TestBox: React.FC = () => {
  // Génération des étoiles avec des positions et délais aléatoires
  const stars = useMemo(() => {
    return [...Array(70)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.7 ? 2 : 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden bg-black flex flex-col items-center justify-center">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fond dégradé ciel profond */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0f172a]" />

        {/* Étoiles scintillantes */}
        {stars.map((star) => (
            <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
            }}
            animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
            }}
            transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
            }}
            />
        ))}

        {/* Étoile filante */}
        <motion.div
            className="absolute h-[1px] w-[80px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"
            initial={{ top: "10%", left: "80%", opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{
            top: "40%",
            left: "20%",
            opacity: [0, 1, 0],
            translateX: -100,
            }}
            transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut"
            }}
        />

        {/* --- AURORE BORÉALE --- */}
        <div className="absolute bottom-0 w-full h-[500px] overflow-hidden pointer-events-none">
            {/* Couche principale : Vert Émeraude (Ondulation lente) */}
            <motion.div 
                className="absolute bottom-[-50px] left-[-20%] right-[-20%] h-[400px] bg-gradient-to-t from-emerald-500/40 via-teal-400/20 to-transparent blur-[60px] mix-blend-screen"
                animate={{ 
                    height: ["350px", "450px", "350px"],
                    opacity: [0.3, 0.6, 0.3],
                    borderRadius: ["0% 0% 50% 50%", "10% 10% 40% 40%", "0% 0% 50% 50%"] // Léger effet de vague
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Couche secondaire : Violet/Indigo (Mouvement latéral) */}
            <motion.div 
                className="absolute bottom-[-20px] left-0 w-full h-[350px] bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent blur-[70px] mix-blend-screen"
                animate={{ 
                    x: [-50, 50, -50],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Couche tertiaire : Cyan brillant (Highlights localisés) */}
            <motion.div 
                className="absolute bottom-0 right-[10%] w-[60%] h-[300px] bg-gradient-to-tl from-cyan-400/30 via-blue-400/10 to-transparent blur-[50px] mix-blend-screen"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                    x: [20, -20, 20]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
             
             {/* Lueur d'horizon (base de l'aurore) */}
             <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-emerald-900/50 to-transparent blur-xl"></div>
        </div>

        {/* Planète - Horizon */}
        <motion.div
            className="absolute left-1/2 w-[1600px] h-[1600px] rounded-full bg-[#1c1c1c] z-10"
            style={{
                bottom: "-1450px", 
                translateX: "-50%",
                // Halo blanc très fin inspiré de alcove.news
                boxShadow: "0 -1px 2px rgba(255, 255, 255, 0.4), 0 -4px 15px rgba(255, 255, 255, 0.05)"
            }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay rounded-full"></div>
        </motion.div>
      </div>

      {/* --- CONTENT FOREGROUND LAYER --- */}
      <div className="relative z-20 flex flex-col items-center gap-6 p-8 text-center max-w-2xl">
        
        {/* Profile Image with glow */}
        <div className="relative group">
            {/* Glow adapté aux couleurs de l'aurore */}
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-2xl relative bg-black">
                <img 
                    src="https://picsum.photos/200/200?grayscale" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Text Info */}
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-lg">
                David Gonzalez
            </h1>
            <p className="text-emerald-200 text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
                Concepteur en communication web
            </p>
        </div>

      </div>
    </div>
  );
};