"use client";

import { usePortfolioTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ToggleThemeButton() {
  const { theme, toggleTheme } = usePortfolioTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return isMounted ? (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex h-10 w-20 cursor-pointer items-center rounded-3xl p-[0.313rem] ${theme === "light" ? "justify-start" : "justify-end"} ${theme !== "light" ? "bg-zinc-600" : "bg-purple-200"}`}
      aria-label="Toggle theme"
    >
      <motion.div layout className="rounded-3xl bg-white p-2">
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
      </motion.div>
    </button>
  ) : (
    <div />
  );
}
