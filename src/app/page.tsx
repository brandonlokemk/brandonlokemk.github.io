'use client'
// File: app/page.tsx (Homepage)
import Hero from './hero/page';
import About from './about/page';
import Projects from './projects/page';
import './globals.css';
import NavBar from '@/components/NavBar';
import ScrollToTopListener from '@/components/ScrollToTopListener';
import { motion } from 'motion/react';


// Font

export default function Home() {
  return (
    <motion.div 
    className="bg-light-color1 text-light-text dark:bg-dark-color1 dark:text-dark-text">
      <ScrollToTopListener/>
      <Hero/>
      <div> 
        <NavBar className='sticky top-0 z-10'/>
        <About/>
        <Projects/>
      </div>
    </motion.div>

  );
}