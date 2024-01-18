import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ProjectsList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const ProjectsListItem = styled.li`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardProject = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 21.5rem;
  height: 11.5rem;
  border: 1px solid ${({ theme }) => theme.colors.zinc_700};
  border-radius: 0.75rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: scale-down;
`;

export const NameProject = styled.div`
  text-align: center;
  margin-top: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.lineHeight.xl};
`;

export const Description = styled.span`
  opacity: 0.7;
  text-align: center;
`;
