'use Client';

import { Button } from "./ui/button";
import { FileDown } from "lucide-react"

export function DownloadResumeButton ({ className }: { className?: string }) {
    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = '/Brandon_Resume.pdf'; // Adjust the path to your resume file
    //     link.download = 'Brandon_Resume.pdf'; // The name of the downloaded file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
    return (
        <a className={className}
        href="/files/Brandon_Resume.pdf"
        download="Brandon_Resume.pdf"
        >
            <Button size={"sm"}>
                <FileDown/>
                Resume
            </Button>
        </a>
    )
}