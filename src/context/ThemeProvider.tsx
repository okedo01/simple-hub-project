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
        localStorage.getItem("theme" as Theme) || "light";
    });

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
        localStorage.setItem("theme", JSON.stringify(mode));
    }, [mode]);

    const toggleMode = () => {
        setMode(prev => (
            prev === "light" ? "dark" : "light"
        ));
    }
    return (
        <themeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </themeContext.Provider>
    )
}