// contextsThem.js

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkMode: () => {
        console.log('dark mode');
    },
    lightMode: () => {
        console.log('light mode');
    },
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}