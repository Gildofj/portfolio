import { CodeSlash } from "react-ionicons";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 20;
  backdrop-filter: blur(12px);
  font-family: "Fira Code";
  padding: 0.5rem;
  transition: 0.2s;
`;

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 30;

  @media screen and (max-width: 768px) {
    height: 46.2px;
  }
`;

interface StyledListProps {
  open: boolean;
}

export const HeaderList = styled.ul<StyledListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.lg};
    position: absolute;
    gap: 0.5rem;
    top: 60px;
    left: 0;
    z-index: 10;
    padding: ${({ open }) => (open ? "5rem" : 0)};
    height: ${({ open }) => (open ? "100vh" : 0)};
    transition: all 0.3s ease-in;
    overflow-y: ${({ open }) => (open ? "auto" : "hidden")};
    border-radius: 0 0 0.75em 0.75rem;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Logo = styled.h2`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};
  letter-spacing: -0.05em;
  padding: 0.5rem;
  font-family: "Fira Code";
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-top: 0.8rem;
`;

export const LinkLogo = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration-line: none;
  gap: 0.4rem;
`;

interface LinkProps {
  active: boolean;
  open: boolean;
}

export const Link = styled.a<LinkProps>`
  display: inline-block;
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 4px solid
    ${({ active, open, theme }) =>
      active && !open ? theme.colors.text : theme.colors.transparent};
  transition: 0.2s;

  &:active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media screen and (max-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

export const HeaderButton = styled.button`
  display: none;
  max-width: 38px;
  max-height: 38px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.zinc_700};
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${({ theme }) => theme.colors.zinc_800};
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow:
      0 0 0 2px #f3f4f6,
      0 0 0 calc(2px + 2px) rgb(99 102 241 / 1),
      0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  @media screen and (max-width: 1000px) {
    display: inline-block;
  }
`;

export const HeaderSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0.5rem;
`;

interface SocialLinkProps {
  hideOnSmall?: boolean;
}

export const SocialLink = styled.a<SocialLinkProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 768px) {
    display: ${({ hideOnSmall }) => (hideOnSmall ? "none" : "inline-block")};
  }
`;

export const LogoIcon = styled(CodeSlash)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    padding-bottom: 0.1rem;
    padding-right: 0.1rem;
  }
`;
