import { useMemo } from "react";
import { SkillCategory } from "../types";
import { useTheme } from "styled-components";

export function useSkill(categories: SkillCategory) {
  const theme = useTheme();

  const color = useMemo(() => {
    const category = categories[0];
    return theme.colors.skills[category];
  }, [categories, theme]);

  const iconGenerated: SimpleIcon | null = useMemo(() => {
    const normalized = icon
      .toLowerCase()
      .replace(/\+/g, "plus")
      .replace(/#/g, "sharp")
      .replace(/\./g, "dot")
      .replace(/\s/g, "")
      .replace(/[^a-z0-9]/g, "");

    const key = `si${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`;

    const icons = simpleIcons as unknown as Record<string, SimpleIcon>;
    const simpleIcon = icons[key];

    if (!simpleIcon) {
      console.warn(icon);
    }

    return simpleIcon ?? null;
  }, [icon]);
}
