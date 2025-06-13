import { FunnelSimpleIcon } from "@phosphor-icons/react";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useTheme } from "styled-components";

import { usePortfolioTheme } from "../../../contexts/ThemeContext";
import { SkillCategory, SkillType } from "../types";

import {
  MenuContent,
  MenuCheckboxItem,
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
          <MenuLabel>Types</MenuLabel>
          <MenuCheckboxItem
            key={"ALL_TYPES"}
            checked={allTypesSelected}
            onCheckedChange={() => toggleSelectAllTypes()}
          >
            <MenuItemIndicator forceMount>
              <CheckIcon />
            </MenuItemIndicator>
            All
          </MenuCheckboxItem>
          {skillTypeKeys.map(key => {
            const value = SkillType[key];
            return (
              <MenuCheckboxItem
                key={key}
                checked={selectedTypes.includes(value)}
                onCheckedChange={() => toggleType(value)}
              >
                <MenuItemIndicator forceMount>
                  <CheckIcon />
                </MenuItemIndicator>
                {intl.formatMessage({ id: `skills.type.${value}` })}
              </MenuCheckboxItem>
            );
          })}

          <MenuSeparator />

          <MenuLabel>Categories</MenuLabel>
          <MenuCheckboxItem
            key={"ALL_CATEGORIES"}
            checked={allCategoriesSelected}
            onCheckedChange={() => toggleSelectAllCategories()}
          >
            <MenuItemIndicator forceMount>
              <CheckIcon />
            </MenuItemIndicator>
            All
          </MenuCheckboxItem>
          {skillCategoryKeys.map(key => {
            const value = SkillCategory[key];
            const color = styledTheme.colors.skills[value];
            return (
              <MenuCheckboxItem
                color={color}
                key={key}
                checked={selectedCategories.includes(value)}
                onCheckedChange={() => toggleCategory(value)}
              >
                <MenuItemIndicator forceMount>
                  <CheckIcon />
                </MenuItemIndicator>
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
