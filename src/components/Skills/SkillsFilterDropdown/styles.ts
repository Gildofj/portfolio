import {
  CheckboxItem,
  Content,
  ItemIndicator,
  Label,
  Separator,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

interface DropdownState {
  $currentTheme?: string | undefined | null;
}

export const MenuButton = styled(Trigger)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  transition: all 500ms;

  &:hover {
    color: ${({ theme }) => theme.colors.purple_600};
  }
`;

export const MenuContent = styled(Content)<DropdownState>`
  z-index: 99999;
  border-radius: 0.375rem;
  padding: 0.25rem;
  width: 20rem;
  background-color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light"
      ? theme.colors.zinc_800
      : theme.colors.purple_200};

  transition: all 500ms;
`;

export const MenuSeparator = styled(Separator)`
  background-color: ${({ theme }) => theme.colors.zinc_500};
  height: 1px;
  margin: 0.375rem;
`;

export const MenuLabel = styled(Label)<DropdownState>`
  color: ${({ theme, $currentTheme }) =>
    $currentTheme !== "light" ? theme.colors.zinc_300 : theme.colors.zinc_700};
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;

interface MenuItemProps {
  color?: string;
}
export const MenuCheckboxItem = styled(CheckboxItem)<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  color: ${({ theme, color }) => color ?? theme.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.zinc_700};
  }
`;

export const MenuItemIndicator = styled(ItemIndicator)`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.25rem;
  padding: 0.1rem;

  transition: all 500ms;

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.colors.purple_100};
    color: ${({ theme }) => theme.colors.purple_500};
  }
`;
