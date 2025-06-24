import { CodeIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 20;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px) !important;
  -moz-backdrop-filter: blur(12px) !important;
  font-family: "Fira Code";
  padding: 0.5rem;
  transition: 0.2s;
  top: 0;
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
  $open: boolean;
}

export const HeaderList = styled(motion.ul)<StyledListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition:
    visibility 0s,
    opacity 0.5s;

  @media screen and (max-width: 1536px) {
    position: static;
    transform: translateX(0);
  }

  @media screen and (max-width: 1350px) {
    gap: 0.5rem;
  }

  @media screen and (max-width: 1200px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    padding-bottom: 10%;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.lg};
    gap: 0.5rem;
    top: 60px;
    left: 0;
    z-index: 10;
    overflow-y: ${({ $open }) => ($open ? "auto" : "hidden")};
    border-radius: 0 0 0.75em 0.75rem;
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
  }
`;

export const LocaleList = styled.div`
  display: none;
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    display: inline-flex;
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

  img {
    max-width: 9rem;
    max-height: 60px;
    padding: 1.2rem 0.3rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavigationItem = styled(motion.li)`
  position: relative;
  user-select: false;
  cursor: pointer;
`;

interface LinkProps {
  $open: boolean;
  $withIcon?: boolean;
}

export const Link = styled.a<LinkProps>`
  display: ${({ $withIcon }) => ($withIcon ? "inline-flex" : "inline-block")};
  gap: 0.5rem;
  align-items: center;
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.2s;

  span > svg {
    color: ${({ theme }) => theme.colors.text};
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 1200px) {
    display: ${({ $withIcon }) => ($withIcon ? "flex" : "block")};
    width: 100%;
    color: ${({ theme }) => theme.colors.zinc_300};

    span > svg {
      color: ${({ theme }) => theme.colors.zinc_300};
      fill: ${({ theme }) => theme.colors.zinc_300};
    }
  }
`;

export const LinkUnderline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
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

  @media screen and (max-width: 1200px) {
    display: inline-block;
  }
`;

export const HeaderSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0.5rem;

  @media screen and (max-width: 1240px) {
    gap: 0.25rem;
  }
`;

interface SocialLinkProps {
  $hideOnSmall?: boolean;
}

export const SocialLink = styled.a<SocialLinkProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 768px) {
    display: ${({ $hideOnSmall }) => ($hideOnSmall ? "none" : "inline-block")};
  }
`;

export const LogoIcon = styled(CodeIcon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    padding-bottom: 0.1rem;
    padding-right: 0.1rem;
  }
`;

export const FlagButtonNav = styled.button`
  cursor: pointer;
`;
