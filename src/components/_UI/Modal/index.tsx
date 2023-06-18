import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Overlay } from "../Overlay";
import { Content } from "./styles";
import { ModalProps } from "./types";
import { handleScrollWhenModalIsOpen } from "../../../utils/scroll";
import { AnimatePresence } from "framer-motion";

export function Modal({ open, toggleOpen, width, height, children }: ModalProps) {
  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [])

  useEffect(() => {
    handleScrollWhenModalIsOpen(open)
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
          <Content
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            width={width}
            height={height}
          >
            {children}
          </Content>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") as HTMLElement
  );
}
