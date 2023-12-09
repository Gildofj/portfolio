import styled from "styled-components";
import ScrollSpy from "react-ui-scrollspy";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Main = styled(ScrollSpy)`
  height: 100%;
  padding: 5rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
