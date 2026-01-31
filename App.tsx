import React from 'react';
import { Card } from './components/Card';
import { Stack } from './components/Stack';
import { ExperienceList } from './components/ExperienceList';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { TestBox } from './components/TestBox';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-background text-zinc-100 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        
        {/* Header / Intro for mobile */}
        <div className="mb-8 md:hidden">
            <h1 className="text-3xl font-bold font-display text-white">David Gonzalez</h1>
            <p className="text-zinc-500">Portfolio Interactif</p>
        </div>

        {/* Bento Grid Layout - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Header / Planet Profile - Full Width */}
          <Card className="md:col-span-2" delay={0.15} noPadding>
            <TestBox />
          </Card>

          {/* 2. Experience - Full Width */}
          <Card className="md:col-span-2" delay={0.2}>
            <ExperienceList />
          </Card>

          {/* 3. Services - Left Column */}
          <Card className="md:col-span-1" delay={0.3}>
            <Services />
          </Card>

          {/* 4. Socials - Right Column */}
          <Card className="md:col-span-1" delay={0.3}>
            <Socials />
          </Card>

          {/* 5. Stack - Full Width */}
          <Card className="md:col-span-2" delay={0.4}>
            <Stack />
          </Card>

          {/* 6. Education - Full Width */}
          <Card className="md:col-span-2" delay={0.45}>
            <Education />
          </Card>

           {/* 7. Projects - Full Width */}
           <Card className="md:col-span-2" noPadding delay={0.5}>
            <Projects />
          </Card>

          {/* 8. Contact / Call to Action - Full Width */}
          <Card className="md:col-span-2 min-h-[150px] bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800" delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">Prêt à démarrer un projet ?</h2>
                    <p className="text-zinc-400 max-w-md">Je suis actuellement disponible pour des missions freelance ou des opportunités en CDI. Construisons quelque chose d'exceptionnel.</p>
                </div>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                >
                    Me Contacter
                </motion.button>
            </div>
          </Card>

        </div>

        <div className="mt-12 text-center text-zinc-600 text-sm">
            <p>© {new Date().getFullYear()} David Gonzalez. Tous droits réservés.</p>
        </div>
      </div>
    </main>
  );
}