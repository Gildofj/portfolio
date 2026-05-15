"use client";

import { m } from "motion/react";
import React from "react";

const titleClassName = "font-bold font-mono text-primary text-3xl md:text-4xl";

export function Title({
  className,
  ...props
}: React.ComponentProps<typeof m.h3>) {
  return (
    <m.h3
      className={[titleClassName, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
