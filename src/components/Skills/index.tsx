import { Title } from "../_UI/Title";
import { BACKEND_SKILLS, FRONTEND_SKILLS, MOBILE_SKILLS } from "./constants";
import { Expertise } from "./Expertise";
import { Container, Grid, IconTitle } from "./styles";

export function Skills() {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Grid>
        <Expertise title="Backend" skills={BACKEND_SKILLS} color="#34D399" icon={<IconTitle color="#34D399" className='bx bx-data'></IconTitle>} />
        <Expertise title="Frontend" skills={FRONTEND_SKILLS} color="#DDA0DD" icon={<IconTitle color="#DDA0DD" className='bx bx-desktop'></IconTitle>} />
        <Expertise title="Mobile" skills={MOBILE_SKILLS} color="#1D1160" icon={<IconTitle color="#1D1160" className='bx bx-mobile'></IconTitle>} />
      </Grid>
    </Container>
  )
}