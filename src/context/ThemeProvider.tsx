import type React from "react"
import { Children, useContext, useState } from "react";
import { createContext } from "vm";

type themeContextType = {
    theme: "light" | "dark";
}

type props = {
    children: React.ReactNode;
}

const themeContext = createContext<themeContextType | undefined>(undefined);

export const useTheme = () => {
    const theme = useContext();
    if(!theme) {
        throw new Error("useTheme must be used inside themeContext");
    }
    return theme;
}

export const ThemeProvider = ({ children }: props) => {
    const [ mode, setMode ] => useState<theme>(dark);
}

<themeContext.Provider value={{}}>
    { children }
</themeContext.Provider>