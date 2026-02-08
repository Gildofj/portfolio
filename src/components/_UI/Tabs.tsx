"use client";

import { motion } from "motion/react";
import React from "react";

export function Tabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center max-[400px]:mr-0 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

interface TabProps {
  $active?: boolean;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function Tab({
  $active,
  active,
  children,
  className,
  ...motionProps
}: TabProps) {
  const isActive = active ?? $active ?? false;
  return (
    <motion.div
      className={`flex cursor-pointer items-center gap-2 text-xl font-semibold transition-[0.2s] mx-2 my-0 max-[576px]:mx-3 ${isActive ? "text-primary" : "text-zinc-900 dark:text-zinc-300"} hover:text-purple-800 [&_span_svg]:hover:text-purple-800 [&_span_svg]:hover:fill-purple-800 ${isActive ? "[&_span_svg]:text-primary [&_span_svg]:fill-primary" : "[&_span_svg]:text-zinc-900 [&_span_svg]:fill-zinc-900 dark:[&_span_svg]:text-zinc-300 dark:[&_span_svg]:fill-zinc-300"} ${className ?? ""}`}
      {...(motionProps as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}
