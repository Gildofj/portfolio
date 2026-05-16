"use client";

import { m } from "motion/react";
import React from "react";

const titleContainerClassName =
  "flex w-full items-center justify-center text-center pt-0 md:pt-28";

export function TitleContainer({
  className,
  ...props
}: React.ComponentProps<typeof m.div>) {
  return (
    <m.div
      className={[titleContainerClassName, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
