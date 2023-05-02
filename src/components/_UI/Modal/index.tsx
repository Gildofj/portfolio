import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Overlay } from "../Overlay";
import { Content } from "./styles";
import { ModalProps } from "./types";
import { handleScrollWhenModalIsOpen } from "../../../utils/scroll";

export function Modal({ open, toggleOpen, width, height, children }: ModalProps) {
  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [])

  useEffect(() => {
    handleScrollWhenModalIsOpen(open)
  }, [open]);

  if (!open) return null;

  return createPortal(
    <>
      <Overlay onClick={toggleOpen} />
      <Content width={width} height={height}>
        {children}
      </Content>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
}
