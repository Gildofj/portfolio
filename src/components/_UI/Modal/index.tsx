"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { handleScrollWhenModalIsOpen } from "../../../utils/scroll";
import { Overlay } from "../Overlay";

import { ModalProps } from "./types";

export function Modal({
  open,
  toggleOpen,
  width = 70,
  height = 70,
  children,
}: ModalProps) {
  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, []);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <Overlay
            onClick={toggleOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 z-10000 m-auto block max-h-[80%] min-h-[70%] w-[70%] min-w-[70%] max-w-[70%] rounded-xl bg-purple-50 p-4 text-zinc-900 shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:bg-zinc-900 dark:text-zinc-300 max-md:max-h-[95%] max-md:min-h-[95%] max-md:max-w-[95%] max-md:min-w-[95%] max-md:overflow-auto"
            style={{
              minWidth: `${width}%`,
              minHeight: `${height}%`,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") as HTMLElement,
  );
}
