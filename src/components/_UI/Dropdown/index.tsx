import { CheckIcon, DivideIcon } from "@phosphor-icons/react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, HTMLMotionProps } from "motion/react";
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
  forceMountPortal?: true;
  motionProps?: HTMLMotionProps<"div">;
};

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (
    { children, width, forceMountPortal, motionProps, ...props },
    forwardedRef
  ) => {
    const { theme } = usePortfolioTheme();
    const defaultMotion = {
      initial: { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: { opacity: 0, height: 0 },
      transition: { duration: 0.2 },
    };

    return (
      <Menu.Portal forceMount={forceMountPortal}>
        <Menu.Content {...props} ref={forwardedRef} asChild>
          <MenuContent
            {...defaultMotion}
            {...motionProps}
            width={width ? pxToRem(width) : undefined}
            $currentTheme={theme}
          >
            <AnimatePresence propagate>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0, duration: 0.1 } }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            <MenuArrow $currentTheme={theme} />
          </MenuContent>
        </Menu.Content>
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
