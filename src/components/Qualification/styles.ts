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

interface QualificationIconProps {
  active: boolean;
}

export const QualificationIcon = styled.i<QualificationIconProps>`
 font-size: 1.8rem;
 margin-right: 0.5rem;
 color: ${({ active, theme: { colors } }) => active ? colors.purple : colors.text};
 transition: .2s;

 &:hover {
    color: ${({ active, theme: { colors } }) => !active && colors.purple_200};
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
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
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0.5rem;
  cursor: pointer;
  color: ${({ active, theme: { colors } }) => active ? colors.purple : colors.text};
  transition: .2s;

  &:hover {
    color: ${({ active, theme: { colors } }) => !active && colors.purple_200};
    ${QualificationIcon} {
      color: ${({ active, theme: { colors } }) => !active && colors.purple_200};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 576px){
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

  @media screen and (max-width: 400px){
    gap: 1rem;
  }
`;

export const DataTitle = styled.div`
  font-weight: 600;

  @media screen and (max-width: 768px) {
   font-size: 1.25rem ;
  }
`;

export const DataSubTitle = styled.div`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.caption_300};
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DataCalendar = styled.div`
  color: ${({ theme: { colors } }) => colors.caption_300};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};

  @media screen and (max-width: 768px) {
   font-size: 1rem;
  }
`;

export const Rounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme: { colors } }) => colors.purple_300};
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const Line = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  transform: translate(6px, -7px);
  background-color: ${({ theme: { colors } }) => colors.purple_300};

  @media screen and (max-width: 768px) {
    width: 4px;
  }
`;

// Modal styles
export const ModalButton = styled.button`
  display: block;
  margin-top: 0.5rem;
  background: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.purple_300};
  transition: .2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple_200};
  }

  @media screen and (max-width: 768px) {
   font-size: 1rem;
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
  background: #00000000;
  cursor: pointer;
`;

export const CloseIcon = styled.i`
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.purple_200};
`;

export const TextTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.purple_200};
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
  line-height: 1.5rem;
  white-space: pre-line;
  text-align: justify;
`;

export const CertificateAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: .2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.violet}
  }
`;

export const CertificateIcon = styled.img`
  cursor: pointer;
  filter: invert(76%) sepia(34%) saturate(2086%) hue-rotate(244deg) brightness(97%) contrast(92%);
`;
