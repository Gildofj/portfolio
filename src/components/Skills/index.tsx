import { useIntl } from "react-intl";
import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { ScrollAnimatedProps } from "../types";
import { Skill } from "./Skill";
import { Container, Grid } from "./styles";
import { useSkills } from "./useSkills";

interface SkillsProps extends ScrollAnimatedProps {}

export function Skills({}: SkillsProps) {
  const intl = useIntl();
  const { skills } = useSkills();

  return (
    <Container id="skills">
      <TitleContainer>
        <Title>{intl.formatMessage({ id: "skills.title" })}</Title>
      </TitleContainer>
      <Grid>
        {skills?.map((skill, i) => (
          <Skill
            key={i}
            urlIcon={`/portfolio/assets/images/${skill.icon}.svg`}
            title={skill.title}
          />
        ))}
      </Grid>
    </Container>
  );
}
