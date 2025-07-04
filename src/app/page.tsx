'use client'
// File: app/page.tsx (Homepage)
import Hero from './hero/page';
import About from './about/page';
import Projects from './projects/page';
import './globals.css';
import NavBar from '@/components/NavBar';
// import ScrollToTopListener from '@/components/ScrollToTopListener';
import { useTheme } from '@/components/theme-provider';
// import ScrollSpy from '@/components/ScrollSpy';


// // Font

// export default function Home() {
//   const { isDark } = useTheme();

//   return (
//     <div className={`${isDark? 'bg-dark-color1' : 'bg-light-color1'}`}>
//       {/* <ScrollToTopListener/> */}
//       <ScrollSpy/>
//       <Hero/>
//       <div> 
//         <NavBar className='sticky top-0 z-10'/>
//         <About/>
//         <Projects/>
//       </div>
//     </div>

//   );
// }




import { useEffect, useRef, useState } from 'react';

interface UseSectionScannerProps {
  sections: string[]; // Array of section IDs
  rootMargin?: string; // Default: '-50% 0px -50% 0px'
  threshold?: number; // Default: 0
}

export const useSectionScanner = ({ 
  sections, 
  rootMargin = '-50% 0px -50% 0px',
  threshold = 0 
}: UseSectionScannerProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || '');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
              // Update URL without page reload
              window.history.replaceState(null, '', `#${sectionId}`);
            }
          }
        });
      },
      {
        rootMargin,
        threshold
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    // Set initial URL if no hash exists
    if (!window.location.hash && sections.length > 0) {
      window.history.replaceState(null, '', `#${sections[0]}`);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, rootMargin, threshold]);

  // Helper function to register section refs
  const registerSection = (sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  // Helper function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    activeSection,
    registerSection,
    scrollToSection
  };
};

// Updated Home component
export default function Home() {
  const { isDark } = useTheme();
  const { registerSection } = useSectionScanner({
    sections: ['hero', 'about', 'projects']
  });

  return (
    <div className={`${isDark? 'bg-dark-color1' : 'bg-light-color1'}`}>
      {/* <ScrollToTopListener/> */}
      <section ref={registerSection('hero')} data-section="hero">
        <Hero/>
      </section>
      
      <div> 
        <NavBar className='sticky top-0 z-10'/>
        
        <section ref={registerSection('about')} data-section="about">
          <About/>
        </section>
        
        <section ref={registerSection('projects')} data-section="projects">
          <Projects/>
        </section>
      </div>
    </div>
  );
}