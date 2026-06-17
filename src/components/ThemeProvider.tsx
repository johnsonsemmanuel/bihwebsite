"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  resolved: "dark" | "light";
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolved: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"dark" | "light">("dark");

  // Load stored preference (if user explicitly chose one)
  useEffect(() => {
    const stored = localStorage.getItem("bluespace-theme") as Theme | null;
    if (stored === "dark" || stored === "light" || stored === "system") {
      setThemeState(stored);
    }
  }, []);

  // React to theme changes AND OS-level changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const r: "dark" | "light" =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;
      setResolved(r);
      document.documentElement.setAttribute("data-theme", r);
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (t === "system") {
      localStorage.removeItem("bluespace-theme");
    } else {
      localStorage.setItem("bluespace-theme", t);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
