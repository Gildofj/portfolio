import { useIntl } from "react-intl";

import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { Skill } from "./Skill";
import { Container, Grid } from "./styles";
import { useSkills } from "./useSkills";

export function Skills() {
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
            icon={skill.icon}
            title={skill.title}
            categories={skill.categories}
          />
        ))}
      </Grid>
    </Container>
  );
}
