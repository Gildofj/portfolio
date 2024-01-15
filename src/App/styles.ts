import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.text};

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

export const Main = styled.main`
  height: 100%;
  padding: 76px 2rem 0 2rem;
  margin: 0 auto;
  max-width: 48rem;
`;
