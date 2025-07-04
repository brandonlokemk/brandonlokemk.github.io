'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from "@/components/theme-provider"; 
import { motion } from 'motion/react';
export default function Hero() {
    const { isDark } = useTheme()
    return (
        <section id="hero" className="flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center h-screen'>
                <div className={`bg-gradient-to-b ${isDark ? 'from-dark-color1 via  to-[#32323f99]': 'from-slate-50 to-slate-900 opacity-40'} absolute h-full w-full `}/>
                <h2 className={`text-3xl md:text-5xl z-10 font-bold text-center ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Hello, I&apos;m <span className={`${isDark ? 'text-dark-accent1' : 'text-light-accent1'}`}>Brandon</span>.<br/>Welcome to My Portfolio!</h2>
                <p className={`px-5 text-center md:px-0 text-xl z-10 mb-4 mt-3 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Explore my projects and get to know my work.</p>
                <motion.div
                className='z-10'
                whileHover={{scale: 1.10 }}>
                    <Button asChild>
                        <Link href="#about" className={`px-6 py-3 ${isDark ? 'bg-dark-accent1darker hover:bg-dark-accent1' : 'bg-light-accent1 hover:bg-light-hover'} text-white text-lg rounded-lg shadow-lg`}>More about me</Link>
                    </Button>
                </motion.div>

            </div>
            <div
            id='about'
            className='bg-white mt-auto'></div>
            

        </section>
    )
}
