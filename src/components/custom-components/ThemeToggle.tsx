import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../context/ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon" className="w-10 h-10">
      {mode === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
