import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "@components/_UI/Dropdown";
import { usePortfolioTheme } from "@contexts/ThemeContext";
import { FunnelSimpleIcon } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useTheme } from "styled-components";

import { SkillCategory, SkillType } from "../types";

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
  const [open, setOpen] = useState(false);
  const { theme } = usePortfolioTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Dropdown open={open} onOpenChange={setOpen}>
      <DropdownTrigger asChild>
        <FunnelSimpleIcon size={30} />
      </DropdownTrigger>

      <AnimatePresence>
        {open && (
          <DropdownContent forceMountPortal width={320}>
            <DropdownLabel $currentTheme={theme}>
              {intl.formatMessage({ id: "skills.types" })}
            </DropdownLabel>
            <DropdownCheckboxItem
              key={"ALL_TYPES"}
              checked={allTypesSelected}
              onCheckedChange={() => toggleSelectAllTypes()}
            >
              All
            </DropdownCheckboxItem>
            {skillTypeKeys.map(key => {
              const value = SkillType[key];
              return (
                <DropdownCheckboxItem
                  key={key}
                  checked={selectedTypes.includes(value)}
                  onCheckedChange={() => toggleType(value)}
                >
                  {intl.formatMessage({ id: `skills.type.${value}` })}
                </DropdownCheckboxItem>
              );
            })}

            <DropdownSeparator />

            <DropdownLabel $currentTheme={theme}>
              {intl.formatMessage({ id: "skills.categories" })}
            </DropdownLabel>
            <DropdownCheckboxItem
              key={"ALL_CATEGORIES"}
              checked={allCategoriesSelected}
              onCheckedChange={() => toggleSelectAllCategories()}
            >
              All
            </DropdownCheckboxItem>
            {skillCategoryKeys.map(key => {
              const value = SkillCategory[key];
              const color = styledTheme.colors.skills[value];
              return (
                <DropdownCheckboxItem
                  checkedColor={color}
                  key={key}
                  checked={selectedCategories.includes(value)}
                  onCheckedChange={() => toggleCategory(value)}
                >
                  {intl.formatMessage({ id: `skills.category.${value}` })}
                </DropdownCheckboxItem>
              );
            })}
          </DropdownContent>
        )}
      </AnimatePresence>
    </Dropdown>
  ) : (
    <div />
  );
}
