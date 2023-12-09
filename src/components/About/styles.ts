import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  max-width: 90rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 7rem 2rem;
`;

export const AboutText = styled.p`
  color: ${({ theme: { colors } }) => colors.text};
  width: 100%;
  line-height: 2rem;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
