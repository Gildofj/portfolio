import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface ThemeContextValue {
  theme?: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const PortfolioThemeContext = createContext<ThemeContextValue>({
  theme: undefined,
  toggleTheme: () => {},
});

export function PortfolioThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <PortfolioThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PortfolioThemeContext.Provider>
  );
}

export const usePortfolioTheme = () => useContext(PortfolioThemeContext);

export default PortfolioThemeProvider;
