import { useEffect, useState } from "react";
import { Moon, Sunny } from "react-ionicons";
import { ThemeButton, ThemeButtonContainer } from "./styles";

const themes = ["light", "dark"];

interface ToggleThemeButtonProps {
  theme?: string | undefined | null;
  toggleTheme: () => void;
}

export function ToggleThemeButton({
  theme,
  toggleTheme,
}: ToggleThemeButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ThemeButtonContainer currentTheme={theme}>
      {themes.map(t => {
        const checked = t === theme;
        return (
          <ThemeButton key={t} checked={checked} onClick={toggleTheme}>
            {t === "light" ? <Sunny /> : <Moon />}
          </ThemeButton>
        );
      })}
    </ThemeButtonContainer>
  ) : (
    <div />
  );
}
