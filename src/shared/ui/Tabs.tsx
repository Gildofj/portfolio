"use client";

import { m, AnimatePresence } from "motion/react";
import React from "react";
import { cn } from "../utils/cn";

export function Tabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-full items-center justify-start overflow-x-auto no-scrollbar pb-2 sm:justify-center touch-pan-x px-2",
        className
      )}
    >
      <div className="flex items-center gap-2 rounded-2xl bg-zinc-100/50 dark:bg-zinc-800/50 p-1.5 shadow-neu-pressed backdrop-blur-sm min-w-max">
        {children}
      </div>
    </div>
  );
}

interface TabProps {
  $active?: boolean;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export function Tab({
  $active,
  active,
  children,
  className,
  onClick,
  ...motionProps
}: TabProps) {
  const isActive = active ?? $active ?? false;
  
  return (
    <m.button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex cursor-pointer items-center gap-2 px-6 py-2.5 text-sm sm:text-base font-bold transition-colors duration-300 outline-none rounded-xl",
        isActive 
          ? "text-primary" 
          : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200",
        className
      )}
      whileTap={{ scale: 0.97 }}
      {...(motionProps as React.ComponentProps<typeof m.button>)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      <AnimatePresence>
        {isActive && (
          <m.div
            layoutId="active-tab-pill"
            className="absolute inset-0 bg-white dark:bg-zinc-900 shadow-neu-flat rounded-xl -z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          />
        )}
      </AnimatePresence>
    </m.button>
  );
}
