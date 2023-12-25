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
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple_200};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 3.125rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.purple_600};

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const SocialIcon = styled.i`
  font-size: 1.8rem;
  transition: 0.2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple_200};
  }

  @media screen and (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Authors = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
