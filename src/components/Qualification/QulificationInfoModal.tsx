import { useState } from "react";
import {
  BoldText,
  CloseButton,
  CloseIcon,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  TextTitle
} from "./styles";
import { Modal } from "../_UI/Modal";
import { Qualification } from "./types";
import { WORK_MODEL } from "./constants";

interface QualificationInfoModalProps {
  qualification: Qualification;
}

export function QualificationInfoModal({ qualification }: QualificationInfoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalButton onClick={() => setOpen(!open)}>Ver mais</ModalButton>

      <Modal open={open} toggleOpen={() => setOpen(!open)} width={50} height={50}>
        <ModalContainer>
          <ModalTitle>
            <TextTitle>{qualification.title}</TextTitle>

            <CloseButton onClick={() => setOpen(!open)}>
              <CloseIcon className='bx bx-x' />
            </CloseButton>
          </ModalTitle>
          <ModalContent>
            <div>
              <BoldText>Empresa: </BoldText>
              <span>{qualification.organization}</span>
            </div>
            <div>
              <BoldText>Data inicio: </BoldText>
              <span>{qualification.startDate}</span>
            </div>
            <div>
              <BoldText>Data fim: </BoldText>
              <span>{qualification.endDate}</span>
            </div>
            <div>
              <BoldText>Localização: </BoldText>
              <span>{qualification.country}, {qualification.state}, {qualification.city}</span>
            </div>
            <div>
              <BoldText>Modelo: </BoldText>
              <span>{WORK_MODEL[qualification.workModel]}</span>
            </div>
            <BoldText>Descrição:</BoldText>
            <span>
              {qualification.description}
            </span>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
}
