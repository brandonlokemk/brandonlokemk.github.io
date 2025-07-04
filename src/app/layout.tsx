"use client";
// File: app/layout.tsx (Root Layout)
import "./globals.css";
import { ReactNode, useState } from "react";
// Font
import { Raleway } from "next/font/google";
import { ThemeContext } from "@/components/theme-provider";
const raleway = Raleway({ weight: ["300"], subsets: ["latin"] });
type RootLayoutProps = {
    children: ReactNode;
};
// const useTheme = () => {return useContext(ThemeContext);}

export default function RootLayout({ children }: RootLayoutProps) {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => {
        setIsDark(!isDark);
        console.log(`Theme switched to ${isDark ? "light" : "dark"}`);
    };

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={raleway.className}>
                <ThemeContext.Provider value={{ isDark, toggleTheme }}>
                    <main>{children}</main>
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
