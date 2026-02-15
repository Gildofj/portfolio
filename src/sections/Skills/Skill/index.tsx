"use client";
import { useMemo } from "react";
import { SkillCategory } from "../types";
import SvgIcon from "@/components/_UI/SvgIcon"; // adjust path
import { IconName, ICONS } from "@/shared/icons";

interface SkillProps {
  title: string;
  categories: SkillCategory[];
  icon: IconName;
}

export function Skill({ title, categories, icon }: SkillProps) {
  const color = useMemo(() => {
    const category = categories[0];
    return "var(--color-skill-" + category + ")";
  }, [categories]);

  const iconSrc = useMemo(() => {
    return ICONS[icon];
  }, [icon]);

  return (
    <div className="flex w-full flex-col items-center gap-1 rounded-xl border border-primary p-4 leading-6 transition-[0.2s] hover:scale-110">
      <SvgIcon src={iconSrc} width={48} height={48} style={{ color }} />
      <span className="whitespace-nowrap text-xs" style={{ color }}>
        {title}
      </span>
    </div>
  );
}
