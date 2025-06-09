import { useMemo } from "react";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { useTheme } from "styled-components";

import { SkillCategory } from "../types";
import { SkillName, SkillContainer } from "./styles";

interface SkillProps {
  title: string;
  categories: SkillCategory[];
  icon: string;
}

export function Skill({ title, categories, icon }: SkillProps) {
  return (
    <SkillContainer>
      {/* <SkillIcon src={iconGenerated?.svg} alt={title} title={title} color={color} /> */}
      <SkillName color={color}>{title}</SkillName>
    </SkillContainer>
  );
}
