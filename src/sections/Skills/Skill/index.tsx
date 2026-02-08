import { SvgIcon } from "@/components/_UI/SvgIcon";
import { useMemo } from "react";

import { SkillCategory } from "../types";

interface SkillProps {
  title: string;
  categories: SkillCategory[];
  icon: string;
}

export function Skill({ title, categories, icon }: SkillProps) {
  const color = useMemo(() => {
    const category = categories[0];
    return "var(--color-skill-" + category + ")";
  }, [categories]);

  return (
    <div className="flex w-full flex-col items-center gap-1 rounded-xl border border-primary p-4 leading-6 transition-[0.2s] hover:scale-110">
      <SvgIcon icon={icon} color={color} width={48} height={48} />
      <span className="whitespace-nowrap text-xs" style={{ color }}>
        {title}
      </span>
    </div>
  );
}
