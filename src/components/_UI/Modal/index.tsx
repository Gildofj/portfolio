import { createPortal } from "react-dom";
import { Overlay } from "../Overlay";
import { Content } from "./styles";
import { ModalProps } from "./types";

export function Modal({ open, toggleOpen, width, height, children }: ModalProps) {
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
