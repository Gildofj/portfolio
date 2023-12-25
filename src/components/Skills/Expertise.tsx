import { ReactElement } from "react";
import {
  IconSkill,
  SkillName,
  SkillLevel,
  SkillContainer,
  ExpertiseContainer,
  ExpertiseTitleContainer,
  ExpertiseTitle,
  SkillsContainer,
  SkillData,
} from "./styles";
import { Skill } from "./types";
import { EXPERTISE } from "./constants";

interface ExpertiseProps {
  title: string;
  icon: ReactElement;
  color: string;
  skills: Skill[];
}

export function Expertise({ title, skills, color, icon }: ExpertiseProps) {
  return (
    <ExpertiseContainer>
      <ExpertiseTitleContainer>
        <ExpertiseTitle color={color}>{title}</ExpertiseTitle>
        {icon}
      </ExpertiseTitleContainer>
      <SkillsContainer>
        {skills.map(sk => (
          <SkillContainer key={sk.title}>
            <IconSkill color={color} className="bx bxs-badge-check"></IconSkill>
            <SkillData>
              <SkillName color={color}>{sk.title}</SkillName>
              <SkillLevel>{EXPERTISE[sk.expertise]}</SkillLevel>
            </SkillData>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </ExpertiseContainer>
  );
}
