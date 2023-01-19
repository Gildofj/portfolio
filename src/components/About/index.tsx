import { Brand, Container, DescriptionProfile, Image, Name, Profile, Text, WelcomeText } from "./styles";

export function About() {
  return (
    <Container>
      <Profile>
        <Image />
        <Name>Gildo Junior</Name>
        <DescriptionProfile>Desenvolvedor Full-Stack</DescriptionProfile>
      </Profile>

      <WelcomeText>
        <Text>Bem-vindo ao meu portfólio</Text>
        <Brand>Portfólio</Brand>
      </WelcomeText>


    </Container>
  );
}
