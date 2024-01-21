import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContainer = styled.div`
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterSocial = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 2rem 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span > svg {
    transition: 0.5s;
    color: ${({ theme }) => theme.colors.text};
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const Authors = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.zinc_500};
  padding: 0 2rem;
`;
