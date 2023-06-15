import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { Expertise } from "./Expertise";
import { Container, Grid, IconTitle } from "./styles";
import { SkillType } from "./types";
import { useSkills } from "./useSkills";

export function Skills() {
  const { skills } = useSkills();

  return (
    <Container id="skills">
      <TitleContainer>
        <Title>Skills</Title>
      </TitleContainer>
      <Grid>
        <Expertise
          title="Backend"
          skills={skills?.filter(skill => skill.type == SkillType.BACKEND) || []}
          color="#34D399"
          icon={<IconTitle color="#34D399" className='bx bx-data'></IconTitle>}
        />
        <Expertise
          title="Frontend"
          skills={skills?.filter(skill => skill.type == SkillType.FRONTEND) || []}
          color="#DDA0DD"
          icon={<IconTitle color="#DDA0DD" className='bx bx-desktop'></IconTitle>}
        />
        <Expertise
          title="Mobile"
          skills={skills?.filter(skill => skill.type == SkillType.MOBILE) || []}
          color="#1D1160"
          icon={<IconTitle color="#1D1160" className='bx bx-mobile'></IconTitle>}
        />
      </Grid>
    </Container>
  )
}
