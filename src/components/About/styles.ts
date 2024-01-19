import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-indent: 1rem;
  text-align: justify;

  @media screen and (max-width: 400px) {
    max-width: 22rem;
  }
`;
