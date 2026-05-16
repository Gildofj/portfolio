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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex w-full flex-col items-center gap-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 p-5 leading-6 shadow-neu-flat hover:shadow-neu-hover transition-all duration-300 group will-change-transform"
    >
      <div className="relative">
        <div 
          className="absolute inset-0 blur-lg opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" 
          style={{ backgroundColor: color }} 
        />
        <SvgIcon 
          src={iconSrc} 
          alt={title}
          width={48} 
          height={48} 
          className="relative z-10 transition-transform duration-300 will-change-transform"
          style={{ color }} 
        />
      </div>
      <span className="whitespace-nowrap text-[10px] font-bold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity" style={{ color }}>
        {title}
      </span>
    </m.div>
  );
}
