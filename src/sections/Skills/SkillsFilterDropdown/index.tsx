"use client";

import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "@/components/_UI/Dropdown";
import { SkillCategory, SkillType } from "@/models/skill";
import { FunnelSimpleIcon } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

const skillTypeKeys = Object.keys(SkillType) as Array<keyof typeof SkillType>;
const skillCategoryKeys = Object.keys(SkillCategory).sort((a, b) =>
  a.localeCompare(b),
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
  const t = useTranslations("skills");
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Dropdown open={open} onOpenChange={setOpen}>
      <DropdownTrigger asChild>
        <span className="cursor-pointer text-primary transition-all duration-500 hover:text-purple-600">
          <FunnelSimpleIcon size={30} />
        </span>
      </DropdownTrigger>

      <AnimatePresence>
        {open && (
          <DropdownContent forceMountPortal width={320}>
            <DropdownLabel>{t("types")}</DropdownLabel>
            <DropdownCheckboxItem
              key={"ALL_TYPES"}
              checked={allTypesSelected}
              onCheckedChange={() => toggleSelectAllTypes()}
            >
              All
            </DropdownCheckboxItem>
            {skillTypeKeys.map((key) => {
              const value = SkillType[key];
              return (
                <DropdownCheckboxItem
                  key={key}
                  checked={selectedTypes.includes(value)}
                  onCheckedChange={() => toggleType(value)}
                >
                  {t(`type.${value}`)}
                </DropdownCheckboxItem>
              );
            })}

            <DropdownSeparator />

            <DropdownLabel>{t("categories")}</DropdownLabel>
            <DropdownCheckboxItem
              key={"ALL_CATEGORIES"}
              checked={allCategoriesSelected}
              onCheckedChange={() => toggleSelectAllCategories()}
            >
              All
            </DropdownCheckboxItem>
            {skillCategoryKeys.map((key) => {
              const value = SkillCategory[key];
              return (
                <DropdownCheckboxItem
                  checkedColor={`var(--color-skill-${value})`}
                  key={key}
                  checked={selectedCategories.includes(value)}
                  onCheckedChange={() => toggleCategory(value)}
                >
                  {t(`category.${value}`)}
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
