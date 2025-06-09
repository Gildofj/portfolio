import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";

import { ThemeButton, ThemeButtonContainer } from "./styles";

const themes = ["light", "dark"];

export function ToggleThemeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = usePortfolioTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ThemeButtonContainer $currentTheme={theme}>
      {themes.map(t => {
        const checked = t === theme;
        const iconColor = theme !== "light" ? "#d4d4d8" : "#18181b";
        return (
          <ThemeButton key={t} $checked={checked} onClick={toggleTheme}>
            {t === "light" ? (
              <Sun color={checked ? "#000000" : iconColor} size={16} />
            ) : (
              <Moon color={checked ? "#000000" : iconColor} size={16} />
            )}
          </ThemeButton>
        );
      })}
    </ThemeButtonContainer>
  ) : (
    <div />
  );
}
