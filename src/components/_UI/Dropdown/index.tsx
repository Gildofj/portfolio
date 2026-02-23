"use client";

import { CheckIcon, DivideIcon } from "@phosphor-icons/react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, HTMLMotionProps } from "motion/react";
import { ComponentProps, forwardRef } from "react";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";
import { pxToRem } from "../../../utils/converters";

export const Dropdown = Menu.Root;
export const DropdownTrigger = Menu.Trigger;
export const DropdownItem = Menu.Item;
export const DropdownGroup = Menu.Group;
export const DropdownRadioGroup = Menu.RadioGroup;

type DropdownContentProps = Menu.DropdownMenuContentProps & {
  width?: number;
  forceMountPortal?: true;
  hideArrow?: true;
  motionProps?: HTMLMotionProps<"div">;
};

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (
    { children, width, forceMountPortal, motionProps, hideArrow, ...props },
    forwardedRef,
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
          <motion.div
            {...defaultMotion}
            {...motionProps}
            className={`z-99999 rounded-md p-1 ${theme !== "light" ? "bg-zinc-800" : "bg-purple-200"}`}
            style={{ width: width ? pxToRem(width) : undefined }}
          >
            <AnimatePresence propagate>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0, duration: 0.1 } }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={props.className}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            {!hideArrow && (
              <Menu.Arrow
                className={
                  theme !== "light" ? "fill-zinc-800" : "fill-purple-200"
                }
              />
            )}
          </motion.div>
        </Menu.Content>
      </Menu.Portal>
    );
  },
);
DropdownContent.displayName = "DropDownContent";

export function DropdownLabel({
  className,
  ...props
}: ComponentProps<typeof Menu.Label>) {
  const { theme } = usePortfolioTheme();
  return (
    <Menu.Label
      className={`pb-2 text-center text-sm font-medium ${theme !== "light" ? "text-zinc-300" : "text-zinc-500"} ${className ?? ""}`}
      {...props}
    />
  );
}

type DropdownCheckboxItemProps = Menu.DropdownMenuCheckboxItemProps & {
  checkedColor?: string;
};

export const DropdownCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownCheckboxItemProps
>(({ children, checkedColor, ...props }, forwardedRef) => {
  const { theme } = usePortfolioTheme();
  return (
    <Menu.CheckboxItem
      {...props}
      ref={forwardedRef}
      onSelect={(event) => event.preventDefault()}
      className={`flex cursor-pointer items-center gap-2 rounded-md py-2 pl-2 pr-4 text-zinc-900 dark:text-zinc-300 ${theme !== "light" ? "hover:bg-zinc-700" : "hover:bg-purple-300"}`}
    >
      <Menu.ItemIndicator
        forceMount
        className="rounded border border-zinc-900 p-[0.1rem] transition-colors duration-500 dark:border-zinc-300 data-[state=unchecked]:p-[0.6rem] data-[state=checked]:bg-purple-100 data-[state=checked]:text-purple-950 dark:data-[state=checked]:bg-purple-100 dark:data-[state=checked]:text-purple-950"
        style={
          props.checked === true && checkedColor
            ? { backgroundColor: checkedColor }
            : undefined
        }
      >
        {props.checked === "indeterminate" && <DivideIcon />}
        {props.checked === true && <CheckIcon />}
      </Menu.ItemIndicator>
      {children}
    </Menu.CheckboxItem>
  );
});
DropdownCheckboxItem.displayName = "DropdownCheckboxItem";

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

export const DropdownSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Menu.Separator>) => (
  <Menu.Separator
    className={`my-1.5 h-px bg-zinc-500 ${className ?? ""}`}
    {...props}
  />
);
