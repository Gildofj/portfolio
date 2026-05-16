"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useSyncExternalStore,
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

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: "light" | "dark") => {
  if (typeof document === "undefined") return;

  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.style.colorScheme = theme;
};

const subscribe = () => () => {};

export function PortfolioThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
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
