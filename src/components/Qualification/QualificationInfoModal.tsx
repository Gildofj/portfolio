import { useState } from "react";
import {
  BoldText,
  CertificateAnchor,
  CertificateIcon,
  CloseButton,
  DataField,
  Description,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  TextTitle,
} from "./styles";
import { Modal } from "../_UI/Modal";
import { Qualification } from "./types";
import { WORK_MODEL } from "./constants";
import { CloseOutline } from "react-ionicons";

interface QualificationInfoModalProps {
  qualification: Qualification;
}

export function QualificationInfoModal({
  qualification,
}: QualificationInfoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalButton onClick={() => setOpen(!open)}>Ver mais</ModalButton>

      <Modal open={open} toggleOpen={() => setOpen(!open)} height={50}>
        <ModalContainer>
          <ModalTitle>
            <TextTitle>{qualification.title}</TextTitle>

            <CloseButton onClick={() => setOpen(!open)}>
              <CloseOutline color="#a855f7" height="32px" width="32px" />
            </CloseButton>
          </ModalTitle>
          <ModalContent>
            <DataField>
              <BoldText>Empresa:</BoldText>
              <span>{qualification.organization}</span>
            </DataField>
            <DataField>
              <BoldText>Data inicio:</BoldText>
              <span>{qualification.startDate}</span>
            </DataField>
            <DataField>
              <BoldText>Data fim:</BoldText>
              <span>{qualification.endDate}</span>
            </DataField>
            <DataField>
              <BoldText>Localização:</BoldText>
              <span>
                {qualification.country}, {qualification.state},{" "}
                {qualification.city}
              </span>
            </DataField>
            <DataField>
              <BoldText>Modelo:</BoldText>
              <span>{WORK_MODEL[qualification.workModel]}</span>
            </DataField>
            {qualification.certificateUrl && (
              <DataField>
                <BoldText>Certificado:</BoldText>
                <CertificateAnchor
                  href={qualification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {qualification.certificateId}
                  <CertificateIcon
                    src="/portfolio/assets/images/pop-out.svg"
                    width={23}
                    height={23}
                  />
                </CertificateAnchor>
              </DataField>
            )}
            {qualification.workedAppUrl && (
              <DataField>
                <BoldText>Projetos Trabalhados:</BoldText>
                <CertificateAnchor
                  href={qualification.workedAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {qualification.workedAppName}
                  <CertificateIcon
                    src="/portfolio/assets/images/pop-out.svg"
                    width={23}
                    height={23}
                  />
                </CertificateAnchor>
              </DataField>
            )}
            <BoldText>Descrição:</BoldText>
            <Description>{qualification.description}</Description>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}
