import { motion } from "framer-motion";
import styled from "styled-components";

interface ContainerProps {
  height?: number;
  width?: number;
}

export const Content = styled(motion.div)<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: block;
  background: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-width: ${({ width }) => width ?? 70}%;
  min-height: ${({ height }) => height ?? 70}%;
  max-width: 70%;
  max-height: 80%;
  padding: 1rem;
  border-radius: 0.625rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10000;
`;
