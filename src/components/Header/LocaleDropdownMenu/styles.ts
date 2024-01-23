import styled from "styled-components";
import { Content, Portal } from "@radix-ui/react-dropdown-menu";

interface DropdownState {
  $currentTheme: string;
}

export const MenuPortal = styled(Portal)`
  top: 0.5rem;
  right: 0.5rem;
`;

export const MenuContent = styled(Content)<DropdownState>`
  z-index: 99999;
  border-radius: 0.75rem;
  background-color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_600
      : theme.colors.purple_200};
`;

export const FlagButton = styled.div<DropdownState>`
  display: inline-block;
  border-radius: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_600
      : theme.colors.purple_200};
`;

export const FlagItem = styled.button<DropdownState>`
  display: block;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  cursor: pointer;
  background-color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_600
      : theme.colors.purple_200};

  &:hover {
    background-color: ${({ theme, $currentTheme }) =>
      $currentTheme !== "light"
        ? theme.colors.zinc_700
        : theme.colors.purple_300};
  }
`;
