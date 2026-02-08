"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";

export function Overlay(props: ComponentProps<typeof motion.button>) {
  return (
    <motion.button
      type="button"
      className="fixed left-0 top-[60px] z-20 h-dvh w-dvw bg-black/70"
      {...props}
    />
  );
}
