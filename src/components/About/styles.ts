import styled from "styled-components";
import { Section } from "../_UI/Section";

export const Container = styled(Section)`
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
