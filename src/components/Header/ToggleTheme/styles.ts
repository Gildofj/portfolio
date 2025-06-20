import { motion } from "motion/react";
import styled from "styled-components";

interface ThemeButtonContainerProps {
  $currentTheme?: string | undefined | null;
}

export const ThemeButtonContainer = styled.button<ThemeButtonContainerProps>`
  width: 5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $currentTheme }) =>
    $currentTheme === "light" ? "flex-start" : "flex-end"};
  padding: 0.313rem;
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: ${({ $currentTheme, theme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_600
      : theme.colors.purple_200};

  --webkit-tap-highlight-color: transparent;
`;

export const ThemeCircle = styled(motion.div)`
  border-radius: 1.5rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
