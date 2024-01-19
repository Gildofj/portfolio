import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextValue {
  theme?: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: undefined,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string | undefined>(() => {
    if (import.meta.env.SSR) return undefined;
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme"))
      return localStorage.getItem("theme") || undefined;
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
