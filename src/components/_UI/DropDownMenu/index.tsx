import { CheckIcon, DivideIcon } from "@phosphor-icons/react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { forwardRef, ReactNode } from "react";

export const Dropdown = Menu.Root;
export const DropDownTrigger = Menu.Trigger;

type DropdownContentProps = Menu.DropdownMenuContentProps & {
  childre: ReactNode;
};
export const DropDownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Menu.Portal>
      <Menu.Content {...props} ref={forwardedRef}>
        {children}
        <Menu.Arrow />
      </Menu.Content>
    </Menu.Portal>
  )
);
DropDownContent.displayName = "DropDownContent";

export const DropdownLabel = Menu.Label;
export const DropdownItem = Menu.Item;
export const DropdownGroup = Menu.Group;

type DropdownCheckboxItemProps = Menu.DropdownMenuCheckboxItemProps & {
  childre: ReactNode;
};
export const DropdownCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <Menu.CheckboxItem
    {...props}
    ref={forwardedRef}
    onSelect={event => event.preventDefault()}
  >
    <Menu.ItemIndicator>
      {props.checked === "indeterminate" && <DivideIcon />}
      {props.checked === true && <CheckIcon />}
    </Menu.ItemIndicator>
    {children}
  </Menu.CheckboxItem>
));
DropdownCheckboxItem.displayName = "DropdownCheckboxItem";

export const DropdownRadioGroup = Menu.RadioGroup;

type DropdownRadioItemProps = Menu.DropdownMenuRadioItemProps & {
  children: ReactNode;
};
export const DropdownRadioItem = forwardRef<
  HTMLDivElement,
  DropdownRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <Menu.RadioItem {...props} ref={forwardedRef}>
    <Menu.ItemIndicator>
      <CheckIcon />
    </Menu.ItemIndicator>
    {children}
  </Menu.RadioItem>
));
DropdownRadioItem.displayName = "DropdownRadioItem";

export const DropdownMenuSeparator = Menu.Separator;
