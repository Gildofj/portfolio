import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem 0.5rem 1rem;
  background-color: ${({ theme: { colors } }) => colors.background_900};
  color: ${({ theme: { colors } }) => colors.white};
`;

export const StyledList = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface LinkProps {
  active: boolean;
};

export const Link = styled.a<LinkProps>`
  color: ${({ active, theme }) => active ? theme.colors.purple_300 : "inherit"};
  font-weight: ${({ active }) => active ? 900 : 600};
  transition: .2s;

  &:hover {
    color: ${({ active, theme }) => !active && theme.colors.purple_200}
  }
`;

export const Container = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
`;
