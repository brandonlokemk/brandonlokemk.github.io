import { createContext, useContext } from "react";

export interface SectionContextType {
    activeSection: string;
}

export const defaultSection: SectionContextType = {
    activeSection: 'hero',
}


export const SectionContext = createContext<SectionContextType>(defaultSection);


export const useSectionContext = () => {
    const context = useContext(SectionContext);
    return context; // Return undefined if not in provider
};
