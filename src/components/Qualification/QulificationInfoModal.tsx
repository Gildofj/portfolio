import { useState } from "react";
import { Modal } from "../_UI/Modal";
import { ModalButton } from "./styles";

export function QualificationInfoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalButton onClick={() => setOpen(!open)}>Ver mais</ModalButton>

      <Modal open={open} toggleOpen={() => setOpen(!open)}>
        Teste
      </Modal>
    </>
  )
}
