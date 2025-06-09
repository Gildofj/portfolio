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
  border-radius: 0.75rem;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

interface SkillProps {
  color: string;
}

export const SkillName = styled.span<SkillProps>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ color }) => color};
  text-wrap: nowrap;
  white-space: nowrap;
`;

export const SkillIcon = styled.img<SkillProps>`
  width: 3rem;
  height: 3rem;
  color: ${({ color }) => color};
`;
