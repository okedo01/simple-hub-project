import type React from "react"
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type Theme = "light" | "dark";

type themeContextType = {
    mode: Theme;
    toggleTheme: () => void;
}

type props = {
    children: React.ReactNode;
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
    const [mode, setMode] = useState<Theme>(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark" || saved === "light" ? saved : "light";
    });

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", JSON.stringify(mode));
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    }
    return (
        <themeContext.Provider value={{ mode, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}