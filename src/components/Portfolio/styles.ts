import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7rem 2rem;
  gap: 1rem;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  @media screen and (max-width: 992px) {
    grid-gap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: max-content;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
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
  margin-bottom: 1rem;

  @media screen and (max-width: 992px) {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const NameProject = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 992px) {
    margin-bottom: 0.25rem;
  }
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
