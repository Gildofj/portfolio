import { Modal } from "@components/_UI/Modal";
import { ArrowSquareOutIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "styled-components";

import { WORK_MODEL } from "../constants";
import { Qualification } from "../types";

import {
  BoldText,
  CertificateAnchor,
  CloseButton,
  DataField,
  Description,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  TextTitle,
} from "./styles";

interface QualificationInfoModalProps {
  qualification: Qualification;
}

export function QualificationInfoModal({
  qualification,
}: QualificationInfoModalProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <ModalButton onClick={() => setOpen(!open)}>Ver mais</ModalButton>

      <Modal open={open} toggleOpen={() => setOpen(!open)} height={50}>
        <ModalContainer>
          <ModalTitle>
            <TextTitle>{qualification.title}</TextTitle>

            <CloseButton onClick={() => setOpen(!open)}>
              <XIcon color={theme.colors.primary} size={32} />
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
                  <ArrowSquareOutIcon width={20} height={20} />
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
                  <ArrowSquareOutIcon width={20} height={20} />
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
