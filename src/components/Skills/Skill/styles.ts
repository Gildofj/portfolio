import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.3rem;
  line-height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SkillName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text};
  text-wrap: nowrap;
`;

export const SkillIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;
