import styled from "styled-components";

interface ThemeButtonContainerProps {
  currentTheme?: string | undefined | null;
}

export const ThemeButtonContainer = styled.div<ThemeButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  padding: 1px;
  border-radius: 1.5rem;
  background-color: ${({ currentTheme, theme }) =>
    currentTheme !== "light" ? theme.colors.zinc_600 : theme.colors.purple_200};
`;

interface ThemeButtonProps {
  checked: boolean;
}

export const ThemeButton = styled.div<ThemeButtonProps>`
  cursor: pointer;
  border-radius: 1.5rem;
  padding: 0.5rem;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.white : "inherit"};
`;
