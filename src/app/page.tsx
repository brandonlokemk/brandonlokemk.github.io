'use client'
// File: app/page.tsx (Homepage)
import Hero from './hero/page';
import About from './about/page';
import Projects from './projects/page';
import './globals.css';
import NavBar from '@/components/NavBar';
import ScrollToTopListener from '@/components/ScrollToTopListener';
import { useTheme } from '@/components/theme-provider';


// Font

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark? 'bg-dark-color1' : 'bg-light-color1'}`}>
      <ScrollToTopListener/>
      <Hero/>
      <div> 
        <NavBar className='sticky top-0 z-10'/>
        <About/>
        <Projects/>
      </div>
    </div>

  );
}