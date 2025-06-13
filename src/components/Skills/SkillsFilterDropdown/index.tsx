import { DivideIcon, FunnelSimpleIcon } from "@phosphor-icons/react";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import * as Menu from "@radix-ui/react-dropdown-menu";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useTheme } from "styled-components";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";
import { SkillCategory, SkillType } from "../types";

import {
  MenuContent,
  MenuCheckboxItem as StyledMenuCheckboxItem,
  MenuLabel,
  MenuSeparator,
  MenuButton,
  MenuItemIndicator,
} from "./styles";

const skillTypeKeys = Object.keys(SkillType) as Array<keyof typeof SkillType>;
const skillCategoryKeys = Object.keys(SkillCategory).sort((a, b) =>
  a.localeCompare(b)
) as Array<keyof typeof SkillCategory>;

interface SkillFilterDropdownProps {
  selectedTypes: SkillType[];
  selectedCategories: SkillCategory[];
  toggleType: (type: SkillType) => void;
  toggleCategory: (category: SkillCategory) => void;
  allTypesSelected: boolean;
  allCategoriesSelected: boolean;
  toggleSelectAllTypes: () => void;
  toggleSelectAllCategories: () => void;
}

type MenuCheckboxItemProps = Menu.DropdownMenuCheckboxItemProps & {
  children: React.ReactNode;
  $currentTheme?: string;
  checkedColor?: string;
};

export const MenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledMenuCheckboxItem
      {...props}
      ref={forwardedRef}
      onSelect={event => event.preventDefault()}
    >
      <MenuItemIndicator forceMount selectedBackground={props.checkedColor}>
        {props.checked === "indeterminate" && <DivideIcon />}
        {props.checked === true && <CheckIcon />}
      </MenuItemIndicator>
      {children}
    </StyledMenuCheckboxItem>
  );
});

MenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export function SkillFilterDropdown({
  selectedTypes,
  selectedCategories,
  toggleType,
  toggleCategory,
  allTypesSelected,
  allCategoriesSelected,
  toggleSelectAllTypes,
  toggleSelectAllCategories,
}: SkillFilterDropdownProps) {
  const intl = useIntl();
  const styledTheme = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = usePortfolioTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Menu.Root>
      <MenuButton asChild>
        <FunnelSimpleIcon size={30} />
      </MenuButton>

      <Menu.Portal>
        <MenuContent $currentTheme={theme}>
          <MenuLabel $currentTheme={theme}>
            {intl.formatMessage({ id: "skills.types" })}
          </MenuLabel>
          <MenuCheckboxItem
            key={"ALL_TYPES"}
            $currentTheme={theme}
            checked={allTypesSelected}
            onCheckedChange={() => toggleSelectAllTypes()}
          >
            All
          </MenuCheckboxItem>
          {skillTypeKeys.map(key => {
            const value = SkillType[key];
            return (
              <MenuCheckboxItem
                key={key}
                $currentTheme={theme}
                checked={selectedTypes.includes(value)}
                onCheckedChange={() => toggleType(value)}
              >
                {intl.formatMessage({ id: `skills.type.${value}` })}
              </MenuCheckboxItem>
            );
          })}

          <MenuSeparator />

          <MenuLabel $currentTheme={theme}>
            {intl.formatMessage({ id: "skills.categories" })}
          </MenuLabel>
          <MenuCheckboxItem
            key={"ALL_CATEGORIES"}
            $currentTheme={theme}
            checked={allCategoriesSelected}
            onCheckedChange={() => toggleSelectAllCategories()}
          >
            All
          </MenuCheckboxItem>
          {skillCategoryKeys.map(key => {
            const value = SkillCategory[key];
            const color = styledTheme.colors.skills[value];
            return (
              <MenuCheckboxItem
                checkedColor={color}
                key={key}
                $currentTheme={theme}
                checked={selectedCategories.includes(value)}
                onCheckedChange={() => toggleCategory(value)}
              >
                {intl.formatMessage({ id: `skills.category.${value}` })}
              </MenuCheckboxItem>
            );
          })}
        </MenuContent>
      </Menu.Portal>
    </Menu.Root>
  ) : (
    <div />
  );
}
