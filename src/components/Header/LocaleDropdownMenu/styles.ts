import styled from "styled-components";

interface CurrentThemeState {
  $currentTheme?: string | undefined | null;
}

export const FlagButton = styled.div<CurrentThemeState>`
  display: inline-block;
  border-radius: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_600
      : theme.colors.purple_200};

  transition: all 500ms;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const FlagItem = styled.button<CurrentThemeState>`
  display: block;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  cursor: pointer;
  border-radius: 0.375rem;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme, $currentTheme }) =>
      $currentTheme !== "light"
        ? theme.colors.zinc_700
        : theme.colors.purple_300};
  }
`;
