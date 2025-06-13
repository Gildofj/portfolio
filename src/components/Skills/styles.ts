import styled from "styled-components";

import { Section } from "../_UI/Section";

export const Container = styled(Section)`
  gap: 2rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 8rem);
  grid-gap: 1rem;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, 10rem);
    grid-gap: 0.5rem;
  }
`;
