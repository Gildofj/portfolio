"use client";

import { motion } from "motion/react";
import React from "react";

const titleContainerClassName =
  "flex w-full items-center justify-center text-center pt-0 md:pt-28";

export function TitleContainer({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={[titleContainerClassName, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
