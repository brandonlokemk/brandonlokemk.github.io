import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function NavBar({ className }: { className?: string }) {
    const { isDark } = useTheme();

    return (
        <section className={className}>
            <div className={`flex items-center justify-center p-4 backdrop-blur-lg bg-opacity-60 ${isDark ? 'bg-dark-navbar text-white' : 'bg-light-navbar'}`}>
                <ThemeToggleButton className={`mr-auto border-hidden ${isDark ? '' : ''} scale-75`}/>
                <nav className={'absolute flex space-x-5 md:space-x-20 items-center'}>
                    <Link href="#hero" className={`text-md md:text-xl font-bold mx-2 ${isDark ? 'hover:text-dark-accent1' : 'hover:text-light-accent1'} align-text-top`}>Home</Link>
                    <Link href="#about" className={`text-md md:text-xl font-bold text-wrap mx-2 ${isDark ? 'hover:text-dark-accent1' : 'hover:text-light-accent1'} align-text-top hidden md:block`}>About Me</Link>
                    <Link href="#about" className={`text-md md:text-xl font-bold text-wrap mx-2 ${isDark ? 'hover:text-dark-accent1' : 'hover:text-light-accent1'} align-text-top block md:hidden`}>About</Link>
                    <Link href="#projects" className={`text-md md:text-xl font-bold mx-2 ${isDark ? 'hover:text-dark-accent1' : 'hover:text-light-accent1'} align-text-top`}>Projects</Link>
                </nav>
                <DownloadResumeButton className='ml-auto'/>
            </div>
        </section>
    )
}