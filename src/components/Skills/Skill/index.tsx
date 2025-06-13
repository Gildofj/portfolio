import { useMemo } from "react";
import { useTheme } from "styled-components";

import { SvgIcon } from "../../_UI/SvgIcon";
import { SkillCategory } from "../types";

import { SkillName, SkillContainer } from "./styles";

interface SkillProps {
  title: string;
  categories: SkillCategory[];
  icon: string;
}

export function Skill({ title, categories, icon }: SkillProps) {
  const theme = useTheme();

  const color = useMemo(() => {
    const category = categories[0];
    return theme.colors.skills[category];
  }, [categories, theme]);

  return (
    <SkillContainer>
      <SvgIcon icon={icon} color={color} width={48} height={48} />
      <SkillName>{title}</SkillName>
    </SkillContainer>
  );
}
