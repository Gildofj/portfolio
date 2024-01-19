import { useEffect, useState } from "react";
import { Moon, Sunny } from "react-ionicons";
import { ThemeButton, ThemeButtonContainer } from "./styles";
import { useTheme } from "../../../contexts/ThemeContext";

const themes = ["light", "dark"];

export function ToggleThemeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ThemeButtonContainer currentTheme={theme}>
      {themes.map(t => {
        const checked = t === theme;
        const iconColor = theme !== "light" ? "#d4d4d8" : "#18181b";
        return (
          <ThemeButton key={t} checked={checked} onClick={toggleTheme}>
            {t === "light" ? (
              <Sunny
                color={checked ? "#000000" : iconColor}
                width="16px"
                height="16px"
              />
            ) : (
              <Moon
                color={checked ? "#000000" : iconColor}
                width="16px"
                height="16px"
              />
            )}
          </ThemeButton>
        );
      })}
    </ThemeButtonContainer>
  ) : (
    <div />
  );
}
