import styled from "styled-components";

export const Main = styled.main`
  height: 100%;

  @media screen and (max-height: 700px) {
    padding-top: 50px;
  }
`;

export const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 48rem;
`;
