import type React from "react"
import { Children, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type Theme = "light" | "dark";

type themeContextType = {
    mode: Theme;
    toggleTheme: () => void;
}

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
    const [mode, setMode] = useState(() => {
        localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        if(mode === "light") {

        }
    }, []);

    const toggleMode = () => {
        setMode(!mode);
    }
    return (
        <themeContext.Provider value={{ mode }}>
            {children}
        </themeContext.Provider>
    )
}