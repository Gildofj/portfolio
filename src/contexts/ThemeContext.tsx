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

// Criação do contexto com valor inicial parcial (placeholder)
const ThemeContext = createContext<ThemeContextValue>({
  theme: undefined,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado
export const useTheme = () => useContext(ThemeContext);

// Export padrão opcional
export default ThemeProvider;
