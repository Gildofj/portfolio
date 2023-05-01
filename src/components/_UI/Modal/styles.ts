import styled from "styled-components";

interface ContainerProps {
  height?: number;
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  background: ${({ theme: { colors } }) => colors.purple_400};
  min-width: ${({ width }) => width ?? 70}%;
  min-height: ${({ height }) => height ?? 70}%;
  max-width: 70%;
  max-height: 80%;
  padding: 1rem;
  border-radius: 0.625rem;
`;
