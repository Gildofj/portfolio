"use client";
import { useMemo } from "react";
import { m } from "motion/react";
import SvgIcon from "@/shared/ui/SvgIcon";
import { IconName, ICONS } from "@/shared/icons";
import { SkillCategory } from "@/entities/skill/model/skill";

interface SkillProps {
  title: string;
  categories: SkillCategory[];
  icon: IconName;
}

export function SkillItem({ title, categories, icon }: SkillProps) {
  const color = useMemo(() => {
    const category = categories[0];
    return "var(--color-skill-" + category + ")";
  }, [categories]);

  const iconSrc = useMemo(() => {
    return ICONS[icon];
  }, [icon]);

  return (
    <m.div
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex w-full flex-col items-center gap-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 p-5 leading-6 shadow-neu-flat hover:shadow-neu-hover transition-shadow duration-300 group"
    >
      <div className="relative">
        <div 
          className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" 
          style={{ backgroundColor: color }} 
        />
        <SvgIcon 
          src={iconSrc} 
          width={48} 
          height={48} 
          className="relative z-10 transition-transform duration-300"
          style={{ color }} 
        />
      </div>
      <span className="whitespace-nowrap text-[10px] font-bold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity" style={{ color }}>
        {title}
      </span>
    </m.div>
  );
}
