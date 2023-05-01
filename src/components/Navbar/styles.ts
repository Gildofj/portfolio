import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem 0.5rem 1rem;
  background-color: ${({ theme: { colors } }) => colors.background_900};
  color: ${({ theme: { colors } }) => colors.white};
  z-index: 10000;

  @media screen and (max-width: 768px) {
      height: 6rem;
  }
`;

interface StyledListProps {
  open: boolean;
}

export const StyledList = styled.ul<StyledListProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    font-size: 2rem;
    gap: 5rem;
    position: absolute;
    top: 6rem;
    left: 0;
    z-index: 10;
    padding: ${({ open }) => open ? "5rem" : 0};
    height: ${({ open }) => open ? "100vh" : 0};
    transition: all 0.3s ease-in;
    overflow-y: ${({ open }) => open ? "auto" : "hidden"};
    border-radius: 0 0 0.625rem 0.625rem;
    background: rgb(114,14,158);
    background: -moz-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
    background: -webkit-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
    background: linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);
  }
`;

interface LinkProps {
  active: boolean;
  open: boolean;
};

export const Link = styled.a<LinkProps>`
  color: ${({ active, open, theme }) => active && !open ? theme.colors.purple_300 : "inherit"};
  font-weight: ${({ active }) => active ? 900 : 600};
  transition: .2s;

  &:hover {
    color: ${({ active, theme }) => !active && theme.colors.purple_200}
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  transition: .2s;
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

export const NavbarIcon = styled.i`
  @media screen and (max-width: 768px) {
    font-size: 6rem;
    color: ${({ theme: { colors } }) => colors.text}
  }
`;
