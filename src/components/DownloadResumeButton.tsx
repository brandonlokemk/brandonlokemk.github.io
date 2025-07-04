'use Client';

import { Button } from "./ui/button";
import { FileDown } from "lucide-react"
import { useTheme } from "@/components/theme-provider";
import { motion } from "motion/react";

export function DownloadResumeButton () {
    const {isDark} = useTheme();
    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = '/Brandon_Resume.pdf'; // Adjust the path to your resume file
    //     link.download = 'Brandon_Resume.pdf'; // The name of the downloaded file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    return (
        <a className={`ml-auto rounded-sm`}
        href="/files/Brandon_Resume.pdf"
        download="Brandon_Resume.pdf"
        >
            <motion.div
            whileHover={{ scale: 1.10 }}>
                <Button className={`${isDark ? 'bg-dark-accent1darker text-dark-text hover:bg-dark-accent1' : 'bg-light-accent1 text-dark-text hover:bg-light-accent1'}`} size={"sm"}>
                    <FileDown/>
                    <a className="hidden md:block">
                        Resume
                    </a>
                </Button>
            </motion.div>
            
        </a>
    )
}