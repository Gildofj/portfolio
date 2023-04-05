import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

export const CardProject = styled.div`
  display: inline-grid;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.625rem;
  background: rgb(114,14,158);
  background: -moz-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: -webkit-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);
`;

export const Image = styled.img`
  width: 21.5rem;
  height: 11.5rem;
  border-radius: 0.625rem;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NameProject = styled.h3`
  font-weight: bold;
`;

export const ArrowIcon = styled.i`
  font-size: 1.25rem;
  transition: .3s;
  &:hover {
    transform: translate(0.25rem);
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  font-size: 1rem;
  &:hover {
    ${ArrowIcon} {
      transform: translate(0.25rem);
    }
  }
`;