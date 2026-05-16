"use client";

import { m } from "motion/react";
import { ComponentProps } from "react";

export function Overlay(props: ComponentProps<typeof m.button>) {
  return (
    <m.button
      type="button"
      className="fixed inset-0 z-[15] bg-black/60 backdrop-blur-sm"
      {...props}
    />
  );
}
