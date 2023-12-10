import ScrollSpy from "react-ui-scrollspy";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
   max-width: 30rem;
  }

  @media screen and (max-width: 1260px) {
    max-width: 40rem;
  }

  @media screen and (min-width: 1260px) and (max-width: 1480px) {
    max-width: 70rem;
  }
`;


export const Main = styled(ScrollSpy)`
  height: 100%;
  padding: 5rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
