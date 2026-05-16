"use client";

import { usePortfolioTheme } from "@/shared/lib/ThemeContext";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { AnimatePresence, m } from "motion/react";
import { useSyncExternalStore } from "react";
import { cn } from "@/shared/utils/cn";

const subscribe = () => () => {};

export function ToggleThemeButton() {
  const { theme, toggleTheme } = usePortfolioTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isLight = theme === "light";

  return isMounted ? (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-20 cursor-pointer items-center rounded-2xl p-1 transition-colors duration-500 outline-none overflow-hidden",
        isLight ? "bg-zinc-200" : "bg-zinc-700"
      )}
      aria-label="Toggle theme"
    >
      <m.div 
        initial={false}
        animate={{ 
          x: isLight ? 0 : 40,
          rotate: isLight ? 0 : 360
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          rotate: { duration: 0.5, ease: "easeInOut" }
        }}
        className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-neu-flat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <m.div
              key="light"
              initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <SunIcon size={18} weight="bold" className="text-primary" />
            </m.div>
          ) : (
            <m.div
              key="dark"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MoonIcon size={18} weight="bold" className="text-primary" />
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </button>
  ) : (
    <div className="h-10 w-20" />
  );
}
