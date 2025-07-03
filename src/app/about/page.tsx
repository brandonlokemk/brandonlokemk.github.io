'use client';
import SkillBubbles from "../SkillBubbles";
import TechBubbles from "../TechBubbles";
import { useTheme } from "@/components/theme-provider";
export default function About() {
  const { isDark } = useTheme();
    return (
      <section id="about_section" className="min-h-screen pt-14 px-8 flex flex-col items-center" >
        <h1 className={`text-4xl font-bold mb-6 ${isDark ? 'text-dark-accent1' : ''}`}>About Me</h1>

        {/* <h2 className={`text-4xl font-bold mb-6 ${isDark &&'text-white'}`}>Intro</h2> */}
        <p className={`text-lg mb-4 ${isDark &&'text-white'}`}>Hi! I&apos;m Brandon, a Software Engineer with a specialisation in Artificial Intelligence & Data Science and Analytics.</p>
        <h2 className={`text-3xl font-bold mb-4 ${isDark &&'text-white'}`}>Programming languages</h2>
        <SkillBubbles/>
        <h2 className={`text-3xl font-bold mb-4 ${isDark &&'text-white'}`}>Technologies and Frameworks</h2>
        <TechBubbles/>
        {/* <ul className="list-disc list-inside mb-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Certification 1</li>
          <li>Certification 2</li>
          <li>Certification 3</li>
        </ul> */}
      </section>
    );
  }
  