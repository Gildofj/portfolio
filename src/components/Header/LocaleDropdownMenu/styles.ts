import styled from "styled-components";

interface CurrentThemeState {
  $currentTheme?: string | undefined | null;
}

export const FlagButton = styled.div<CurrentThemeState>`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  transition: all 500ms;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: transform 0.3s ease;
  }

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
