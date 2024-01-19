import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
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

  @media screen and (max-width: 400px) {
    margin-right: 0;
  }
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

  @media screen and (max-width: 400px) {
    grid-template-columns: 8rem max-content 8rem;
    column-gap: 1rem;
  }
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
