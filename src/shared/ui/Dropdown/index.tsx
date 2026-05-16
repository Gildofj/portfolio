"use client";

import { CheckIcon, DivideIcon } from "@phosphor-icons/react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, m, HTMLMotionProps } from "motion/react";
import { ComponentProps, forwardRef } from "react";

import { usePortfolioTheme } from "../../lib/ThemeContext";
import { pxToRem } from "../../utils/converters";
import { cn } from "../../utils/cn";

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
    { children, width, forceMountPortal, hideArrow, ...props },
    forwardedRef,
  ) => {
    const { theme } = usePortfolioTheme();

    return (
      <Menu.Portal forceMount={forceMountPortal}>
        <Menu.Content 
          {...props} 
          ref={forwardedRef} 
          asChild
          onWheel={(e) => e.stopPropagation()}
          className={cn(
            "z-99999 rounded-2xl p-2 shadow-neu-hover border border-white/20 dark:border-zinc-800/50 backdrop-blur-xl",
            "max-md:fixed max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:top-auto max-md:w-[calc(100%-2rem)]! max-md:translate-x-0!",
            theme !== "light" ? "bg-zinc-900/90 text-zinc-100" : "bg-white/90 text-zinc-900",
            props.className
          )}
        >
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ 
              width: width ? pxToRem(width) : undefined,
              maxHeight: "var(--radix-dropdown-menu-content-available-height)",
            }}
          >
            <AnimatePresence propagate>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "no-scrollbar max-h-[inherit]", 
                  !props.className?.includes('overflow-visible') && "overflow-y-auto"
                )}
              >
                {/* Mobile Handle */}
                <div className="hidden max-md:block mx-auto mb-4 h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                {children}
              </m.div>
            </AnimatePresence>

            {!hideArrow && (
              <Menu.Arrow
                className={
                  cn("max-md:hidden", theme !== "light" ? "fill-zinc-900" : "fill-white")
                }
              />
            )}
          </m.div>
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
  return (
    <Menu.Label
      className={`pb-2 px-2 text-xs font-black uppercase tracking-widest opacity-50 ${className ?? ""}`}
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
  return (
    <Menu.CheckboxItem
      {...props}
      ref={forwardedRef}
      onSelect={(event) => event.preventDefault()}
      className="flex cursor-pointer items-center gap-3 rounded-xl py-2.5 px-3 text-sm font-medium transition-all duration-200 outline-none
        hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20"
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <Menu.ItemIndicator
          forceMount
          className="flex h-5 w-5 items-center justify-center rounded-lg border-2 border-zinc-300 dark:border-zinc-700 transition-all duration-300
            data-[state=checked]:border-primary data-[state=checked]:bg-primary"
          style={
            props.checked === true && checkedColor
              ? { backgroundColor: checkedColor, borderColor: checkedColor }
              : undefined
          }
        >
          {props.checked === "indeterminate" && <DivideIcon className="text-white" weight="bold" />}
          {props.checked === true && <CheckIcon className="text-white" weight="bold" size={14} />}
        </Menu.ItemIndicator>
      </div>
      <span className="flex-1">{children}</span>
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
    className={`my-2 h-px bg-zinc-200 dark:bg-zinc-800 ${className ?? ""}`}
    {...props}
  />
);
