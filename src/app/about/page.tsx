"use client";
import SkillBubbles from "../SkillBubbles";
import TechBubbles from "../TechBubbles";
import { useTheme } from "@/components/theme-provider";
// import { motion } from "motion/react"
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

export default function About() {
    const { isDark } = useTheme();
    return (
        <section
            id="about_section"
            className="pb-8 md:pb-0 md:h-screen pt-12 px-14 flex flex-col items-center overflow-auto"
        >
            {/* Pop up section for "About Me" */}
            <div
                className={`shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-5 px-24 pt-16 pb-20 items-center ${
                    isDark ? "border-slate-400 hover:border-slate-300 bg-gray-900/20" : "border-slate-500 hover:border-slate-600 bg-white/50"
                } border rounded-lg`}
            >
                <h1
                    className={`text-4xl font-bold mb-6 ${
                        isDark ? "text-white" : "text-black"
                    }`}
                >
                    About Me
                </h1>

                {/* <h2 className={`text-4xl font-bold mb-6 ${isDark &&'text-white'}`}>Intro</h2> */}
                <p
                    className={`text-lg text-center mb-4 ${
                        isDark && "text-white"
                    }`}
                >
                    Hi! I&apos;m Brandon, a Software Engineer with a
                    specialisation in Artificial Intelligence & Data Science and
                    Analytics.
                </p>
                <div>
                  <h2
                      className={`text-3xl text-center font-bold mb-4 ${
                          isDark && "text-white"
                      }`}
                  >
                      Programming languages
                  </h2>
                  <SkillBubbles />
                </div>
                <div>
                  <h2
                      className={`text-3xl text-center font-bold mb-4 ${
                          isDark && "text-white"
                      }`}
                  >
                      Technologies and Frameworks
                  </h2>
                  <TechBubbles />
                </div>
                {/* Invisible Element */}
                {/* <div className="flex-grow"></div> */}
            </div>
        </section>
    );
}
