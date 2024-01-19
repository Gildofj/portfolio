import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) return undefined;
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme"))
      return localStorage.getItem("theme");
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  return { theme, toggleTheme };
}
