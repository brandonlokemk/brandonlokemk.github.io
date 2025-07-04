import { useEffect, useRef, useState } from "react";

interface UseSectionScannerProps {
    sections: string[]; // Array of section IDs
    rootMargin?: string; // Default: '-50% 0px -50% 0px'
    threshold?: number; // Default: 0
}

export const useSectionScanner = ({
    sections,
    rootMargin = "-50% 0px -50% 0px",
    threshold = 0,
}: UseSectionScannerProps) => {
    const [activeSection, setActiveSection] = useState<string>(
        sections[0] || ""
    );
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Create intersection observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                console.log(
                    "Intersection entries:",
                    entries.map((e) => ({
                        target: e.target.getAttribute("data-section"),
                        isIntersecting: e.isIntersecting,
                        intersectionRatio: e.intersectionRatio,
                    }))
                );

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId =
                            entry.target.getAttribute("data-section");
                        if (sectionId) {
                            console.log(
                                "Setting active section to:",
                                sectionId
                            );
                            setActiveSection(sectionId);
                            window.history.replaceState(
                                null,
                                "",
                                `#${sectionId}`
                            );
                        }
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
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
            window.history.replaceState(null, "", `#${sections[0]}`);
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
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return {
        activeSection,
        registerSection,
        scrollToSection,
    };
};
