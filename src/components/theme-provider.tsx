'use client'

import { createContext, useContext } from "react";
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const defaultTheme: ThemeContextType = {
  isDark: true,
  toggleTheme: () => {
    console.warn("toggleTheme used outside of ThemeProvider context");
  },
}

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const useTheme = () => {
  return useContext(ThemeContext);
}


