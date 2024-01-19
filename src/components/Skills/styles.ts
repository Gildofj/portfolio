import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 8rem);
  grid-gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, 10rem);
    grid-gap: 0.5rem;
  }
`;
