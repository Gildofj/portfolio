"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const PortfolioThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Determines the initial theme based on:
 * 1. Saved preference in localStorage
 * 2. System preference via prefers-color-scheme media query
 * 3. Defaults to 'light'
 */
const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Applies theme to the document by:
 * - Setting the 'dark' class on html element for dark mode
 * - Setting color-scheme CSS property for native form elements
 */
const applyTheme = (theme: "light" | "dark") => {
  if (typeof document === "undefined") return;

  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.style.colorScheme = theme;
};

export function PortfolioThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from system preference or saved value
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  // Apply theme changes to DOM
  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <PortfolioThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PortfolioThemeContext.Provider>
  );
}

export const usePortfolioTheme = () => useContext(PortfolioThemeContext);

export default PortfolioThemeProvider;
