import styled from "styled-components";

export const ModalButton = styled.button`
  display: block;
  margin-top: 0.5rem;
  background: none;
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.sm};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.purple_800};
  transition: 0.2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
`;

export const TextTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoldText = styled.strong`
  font-weight: bold;
`;

export const Description = styled.p`
  white-space: pre-line;
  text-align: justify;
`;

export const CertificateAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const CertificateIcon = styled.img`
  cursor: pointer;
  filter: invert(40%) sepia(37%) saturate(2135%) hue-rotate(241deg)
    brightness(97%) contrast(99%);
`;
