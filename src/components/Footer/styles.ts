import styled from "styled-components";

export const Container = styled.footer`
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

export const FooterNavigation = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 1rem;
`;

export const FooterSocial = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  transition: .2s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple_200}
  }
`;

export const FooterTitle = styled.h2`
  font-size: 3.125rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme: { colors } }) => colors.purple_600};
`;

export const SocialIcon = styled.i`
  font-size: 1.8rem;
  transition: .2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple_200}
  }
`;
