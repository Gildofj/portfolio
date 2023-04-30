import { Overlay } from "../Overlay";
import { Container } from "./styles";
import { ModalProps } from "./types";

export function Modal({ open, toggleOpen, children }: ModalProps) {
  return open ? (
    <Overlay onClick={toggleOpen}>
      <Container>
        {children}
      </Container>
    </Overlay>
  ) : null;
}
