"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";

const sectionClassName =
  "flex min-h-dvh flex-col items-center justify-center py-40";

export function Section({
  className,
  ...props
}: ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      className={[sectionClassName, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
