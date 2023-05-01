import { Overlay } from "../Overlay";
import { Container } from "./styles";
import { ModalProps } from "./types";

export function Modal({ open, toggleOpen, width, height, children }: ModalProps) {
  return open ? (
    <Overlay onClick={toggleOpen}>
      <Container width={width} height={height}>
        {children}
      </Container>
    </Overlay>
  ) : null;
}
