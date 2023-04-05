import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 7rem 0;
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
    gap: 0.5rem;
  }
`;

export const DataTitle = styled.div`
  font-weight: 600;
`;

export const DataSubTitle = styled.div`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.caption_300};
  margin-bottom: 1rem;
`;

export const DataCalendar = styled.div`
  color: ${({ theme: { colors } }) => colors.caption_300};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

export const Rounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme: { colors } }) => colors.purple_300};
  border-radius: 50%;
`;

export const Line = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  transform: translate(6px, -7px);
  background-color: ${({ theme: { colors } }) => colors.purple_300};
`;
