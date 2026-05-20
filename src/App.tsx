/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import ProjectAccordion from './components/ProjectAccordion';
import Contact from './components/Contact';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-studio-blue selection:text-black font-sans">
      <BackgroundEffect className="fixed inset-0 text-studio-text/15" />
      
      <main>
        <Hero />
        


        <ProjectAccordion />
        
        <Contact />
      </main>
    </div>
  );
}

