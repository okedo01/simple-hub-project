import type React from "react"
import { Children, useContext, useState } from "react";
import { createContext } from "react";

type themeContextType = "light" | "dark";

type props = {
    children: React.ReactNode;
    toggleTheme: () => void;
}

const themeContext = createContext<themeContextType | undefined>(undefined);

export const useTheme = () => {
    const theme = useContext(themeContext);
    if (!theme) {
        throw new Error("useTheme must be used inside themeContext");
    }
    return theme;
}

export const ThemeProvider = ({ children }: props) => {
    const [mode, setMode] = useState<theme>(dark);

    const toggleMode = () => {
        setMode(!mode);
    }
    return (
        <themeContext.Provider value={{ mode }}>
            {children}
        </themeContext.Provider>
    )
}