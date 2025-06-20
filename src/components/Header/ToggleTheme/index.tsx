import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";

import { ThemeCircle, ThemeButtonContainer } from "./styles";

export function ToggleThemeButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = usePortfolioTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ThemeButtonContainer $currentTheme={theme} onClick={toggleTheme}>
      <ThemeCircle layout>
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="light"
              initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <SunIcon size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="dark"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MoonIcon color="#000000" size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeCircle>
    </ThemeButtonContainer>
  ) : (
    <div />
  );
}
