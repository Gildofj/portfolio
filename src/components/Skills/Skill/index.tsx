import { SkillName, SkillContainer, SkillIcon } from "./styles";

interface SkillProps {
  title: string;
  urlIcon: string;
}

export function Skill({ title, urlIcon }: SkillProps) {
  return (
    <SkillContainer>
      <SkillIcon src={urlIcon} alt={title} title={title} />
      <SkillName>{title}</SkillName>
    </SkillContainer>
  );
}
