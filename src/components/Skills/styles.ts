import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 7rem 2rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ExpertiseTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;
`;

export const IconTitle = styled.i`
  font-size: 2rem;
  color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    font-size: 2.25rem;
  }
 `;

export const IconSkill = styled.i`
  font-size: 1.5rem;
  text-align: start;
  color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
 `;

export const ExpertiseTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ExpertiseContainer = styled.div`
  width: 23rem;
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding: 2rem;
  border-radius: 0.625rem;
  background: rgb(114,14,158);
  background: -moz-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: -webkit-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);

  &:not(:last-child) {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const SkillName = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ color }) => color};

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SkillLevel = styled.span`
  color: ${({ theme: { colors } }) => colors.caption_300};
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  gap: .3rem;
  line-height: 1.6rem;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const SkillData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
