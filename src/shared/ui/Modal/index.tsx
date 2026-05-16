"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Overlay } from "../Overlay";

import { ModalProps } from "./types";

const subscribe = () => () => {};

export function Modal({
  open,
  toggleOpen,
  children,
}: Omit<ModalProps, 'width' | 'height'>) {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

  if (!isMounted) return null;

  const container = document.getElementById("modal-root");
  if (!container) return null;

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
          <m.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-10000 m-auto block max-h-[85%] w-[90%] max-w-4xl overflow-auto rounded-3xl border border-white/20 bg-white/80 p-6 backdrop-blur-2xl shadow-neu-hover dark:border-zinc-800/50 dark:bg-zinc-900/90 max-md:h-[90%] max-md:w-[95%] sm:p-10"
          >
            {children}
          </m.div>
        </>
      )}
    </AnimatePresence>,
    container,
  );
}
