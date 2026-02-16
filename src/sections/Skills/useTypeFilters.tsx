"use client";

import { useMemo, useState } from "react";

import { SkillType } from "@/models/skill";

const allTypes = [
  SkillType.MAIN,
  SkillType.BACKEND,
  SkillType.FRONTEND,
  SkillType.MOBILE,
  SkillType.OTHER,
];

export function useTypeFilters() {
  const [selectedTypes, setSelectedTypes] = useState<SkillType[]>([
    SkillType.MAIN,
  ]);

  const allTypesSelected = useMemo(
    () =>
      allTypes.every((type) => selectedTypes.includes(type)) &&
      selectedTypes.length === allTypes.length,
    [selectedTypes],
  );

  const toggleType = (type: SkillType) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        const t = [...prev, type];
        return t;
      }
    });
  };

  const toggleSelectAllTypes = () => {
    if (allTypesSelected) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(allTypes);
    }
  };

  return {
    selectedTypes,
    allTypesSelected,
    toggleType,
    toggleSelectAllTypes,
  };
}
