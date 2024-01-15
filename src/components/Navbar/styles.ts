import { MenuSharp } from "react-ionicons";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index: 20;
  backdrop-filter: blur(12px);
  font-family: "Fira Code";
  transition: 0.2s;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 76px;
  z-index: 30;

  @media screen and (max-width: 768px) {
    height: 6rem;
    justify-content: flex-end;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;

interface StyledListProps {
  open: boolean;
}

export const StyledList = styled.ul<StyledListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    font-size: 2rem;
    gap: 5rem;
    position: absolute;
    top: 6rem;
    left: 0;
    z-index: 10;
    padding: ${({ open }) => (open ? "5rem" : 0)};
    height: ${({ open }) => (open ? "100vh" : 0)};
    transition: all 0.3s ease-in;
    overflow-y: ${({ open }) => (open ? "auto" : "hidden")};
    border-radius: 0 0 0.625rem 0.625rem;
    background: ${({ theme }) => theme.background};
  }
`;

export const Logo = styled.h2`
  font-weight: 600;
  letter-spacing: -0.05em;
  padding: 0.5rem;
  font-family: "Fira Code";
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const LinkLogo = styled.a`
  display: inline-flex;
  gap: 0.5rem;
`;

interface LinkProps {
  active: boolean;
  open: boolean;
}

export const Link = styled.a<LinkProps>`
  display: inline-block;
  padding: 1rem 0.5rem;
  color: #ffffff;
  border-bottom: 4px solid
    ${({ active, open }) => (active && !open ? "#ffffff" : "#00000000")};
  transition: 0.2s;

  &:active {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const NavbarButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background: #00000000;
  }
`;

export const NavbarIcon = styled(MenuSharp)`
  @media screen and (max-width: 768px) {
    font-size: 6rem;
    color: #ffffff;
  }
`;

export const NavbarSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0.5rem;
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: #ffffff;
`;
