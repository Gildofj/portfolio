import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 7rem 2rem;
`;

export const Content = styled.div`
  max-width: 48rem;
  min-height: 30rem;
  @media screen and (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  margin-bottom: 3rem;
`;

interface TypeProps {
  active: boolean;
}

export const Tab = styled.div<TypeProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  font-weight: semibold;
  margin: 0 0.5rem;
  cursor: pointer;
  gap: 0.5rem;
  color: ${({ active, theme: { colors } }) =>
    active ? colors.purple_800 : colors.text};
  transition: 0.2s;

  &:hover {
    color: ${({ active, theme: { colors } }) => !active && colors.primary};
  }

  @media screen and (max-width: 576px) {
    margin: 0 0.75rem;
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1.5fr;
  justify-content: center;

  @media screen and (max-width: 576px) {
    grid-template-columns: initial;
  }
`;

export const SectionContent = styled.div`
  display: block;
`;

export const Data = styled.div`
  display: grid;
  grid-template-columns: 1.5fr max-content 1.5fr;
  column-gap: 1.5rem;
`;

export const DataTitle = styled.div`
  font-weight: 600;
`;

export const DataSubTitle = styled.div`
  display: inline-block;
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  color: ${({ theme: { colors } }) => colors.text};
  margin-bottom: 1rem;
`;

export const DataCalendar = styled.div`
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${({ theme: { fontSize } }) => fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
`;

export const Rounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme: { colors } }) => colors.purple_800};
  border-radius: 50%;
`;

export const Line = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  transform: translate(6px, -7px);
  background-color: ${({ theme: { colors } }) => colors.purple_800};
`;

// Modal styles
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
  filter: invert(76%) sepia(34%) saturate(2086%) hue-rotate(244deg)
    brightness(97%) contrast(92%);
`;
