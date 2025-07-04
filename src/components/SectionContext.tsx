import { createContext, useContext, ReactNode } from "react";

interface SectionContextType {
    activeSection: string;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
    const context = useContext(SectionContext);
    return context; // Return undefined if not in provider
};

export const SectionProvider = ({
    children,
    activeSection,
}: {
    children: ReactNode;
    activeSection: string;
}) => {
    return (
        <SectionContext.Provider value={{ activeSection }}>
            {children}
        </SectionContext.Provider>
    );
};
