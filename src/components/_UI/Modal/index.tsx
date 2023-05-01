import { createPortal } from "react-dom";
import { Overlay } from "../Overlay";
import { Content } from "./styles";
import { ModalProps } from "./types";
import { useEffect } from "react";

export function Modal({ open, toggleOpen, width, height, children }: ModalProps) {
  useEffect(() => {
    if (open)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "unset";
  }, [open])

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
