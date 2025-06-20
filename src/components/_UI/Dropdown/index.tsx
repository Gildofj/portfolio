import { CheckIcon, DivideIcon } from "@phosphor-icons/react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";
import { pxToRem } from "../../../utils/converters";

import {
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuItemIndicator,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "./styles";

export const Dropdown = Menu.Root;
export const DropdownTrigger = MenuTrigger;

type DropdownContentProps = Menu.DropdownMenuContentProps & {
  width?: number;
};

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, width, ...props }, forwardedRef) => {
    const { theme } = usePortfolioTheme();
    return (
      <Menu.Portal>
        <MenuContent
          {...props}
          width={width ? pxToRem(width) : undefined}
          $currentTheme={theme}
          ref={forwardedRef}
        >
          {children}
          <MenuArrow $currentTheme={theme} />
        </MenuContent>
      </Menu.Portal>
    );
  }
);
DropdownContent.displayName = "DropDownContent";

export const DropdownLabel = MenuLabel;
export const DropdownItem = Menu.Item;
export const DropdownGroup = Menu.Group;

type DropdownCheckboxItemProps = Menu.DropdownMenuCheckboxItemProps & {
  checkedColor?: string;
};
export const DropdownCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownCheckboxItemProps
>(({ children, checkedColor, ...props }, forwardedRef) => {
  const { theme } = usePortfolioTheme();
  return (
    <MenuCheckboxItem
      {...props}
      ref={forwardedRef}
      onSelect={event => event.preventDefault()}
      $currentTheme={theme}
    >
      <MenuItemIndicator forceMount checkedColor={checkedColor}>
        {props.checked === "indeterminate" && <DivideIcon />}
        {props.checked === true && <CheckIcon />}
      </MenuItemIndicator>
      {children}
    </MenuCheckboxItem>
  );
});
DropdownCheckboxItem.displayName = "DropdownCheckboxItem";

export const DropdownRadioGroup = Menu.RadioGroup;

export const DropdownRadioItem = forwardRef<
  HTMLDivElement,
  Menu.DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <Menu.RadioItem {...props} ref={forwardedRef}>
    <Menu.ItemIndicator>
      <CheckIcon />
    </Menu.ItemIndicator>
    {children}
  </Menu.RadioItem>
));
DropdownRadioItem.displayName = "DropdownRadioItem";

export const DropdownSeparator = MenuSeparator;
