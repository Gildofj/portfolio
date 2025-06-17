import { motion } from "motion/react";
import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 400px) {
    margin-right: 0;
  }
`;

interface TypeProps {
  $active: boolean;
}

export const Tab = styled(motion.div)<TypeProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  font-weight: semibold;
  margin: 0 0.5rem;
  cursor: pointer;
  gap: 0.5rem;
  color: ${({ $active, theme: { colors } }) =>
    $active ? colors.primary : colors.text};
  transition: 0.2s;

  span > svg {
    color: ${({ $active, theme: { colors } }) =>
      $active ? colors.primary : colors.text};
    fill: ${({ $active, theme: { colors } }) =>
      $active ? colors.primary : colors.text};
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple_800};

    span > svg {
      color: ${({ theme: { colors } }) => colors.purple_800};
      fill: ${({ theme: { colors } }) => colors.purple_800};
    }
  }

  @media screen and (max-width: 576px) {
    margin: 0 0.75rem;
  }
`;
