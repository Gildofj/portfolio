"use client";

import { SkillCategory } from "@/models/skill";
import { useMemo, useState } from "react";

const allCategories = [
  SkillCategory.FRAMEWORK,
  SkillCategory.TOOLS,
  SkillCategory.DESIGN,
  SkillCategory.DEVOPS,
  SkillCategory.CONCEPT,
  SkillCategory.LIBRARY,
  SkillCategory.DATABASE,
  SkillCategory.LANGUAGE,
];

export function useCategoryFilter() {
  const [selectedCategories, setSelectedCategories] =
    useState<SkillCategory[]>(allCategories);

  const allCategoriesSelected = useMemo(
    () =>
      allCategories.every((category) =>
        selectedCategories.includes(category),
      ) && selectedCategories.length === allCategories.length,
    [selectedCategories],
  );

  const toggleCategory = (category: SkillCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((t) => t !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const toggleSelectAllCategories = () => {
    if (allCategoriesSelected) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories);
    }
  };

  return {
    selectedCategories,
    allCategoriesSelected,
    toggleCategory,
    toggleSelectAllCategories,
  };
}
