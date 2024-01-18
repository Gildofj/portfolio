import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { ScrollAnimatedProps } from "../types";
import { Skill } from "./Skill";
import { Container, Grid } from "./styles";
import { useSkills } from "./useSkills";

interface SkillsProps extends ScrollAnimatedProps {}

export function Skills({}: SkillsProps) {
  const { skills } = useSkills();

  return (
    <Container id="skills">
      <TitleContainer>
        <Title>Skills</Title>
      </TitleContainer>
      <Grid>
        {skills?.map(skill => (
          <Skill
            urlIcon={`/portfolio/assets/images/${skill.icon}.svg`}
            title={skill.title}
          />
        ))}
      </Grid>
    </Container>
  );
}
