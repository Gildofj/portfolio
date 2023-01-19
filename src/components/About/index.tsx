import {
  AboutContainer,
  AboutText,
  AboutTitle,
  Brand,
  Container,
  DescriptionProfile,
  Image,
  Name,
  PresentationContainer,
  Profile,
  WelcomeContainer,
  WelcomeText,
} from "./styles";

export function About() {
  return (
    <Container id="about">
      <PresentationContainer>
        <Profile>
          <Image />
          <Name>Gildo Junior</Name>
          <DescriptionProfile>Desenvolvedor Full-Stack</DescriptionProfile>
        </Profile>

        <WelcomeContainer>
          <WelcomeText>Bem-vindo ao meu portfólio</WelcomeText>
          <Brand>Portfólio</Brand>
        </WelcomeContainer>
      </PresentationContainer>

      <AboutContainer>
        <AboutTitle>Sobre mim</AboutTitle>
        <AboutText>Sou formado em Análise e Desenvolvimento de Sistemas e atuo na área de desenvolvimento desde o inicio de 2020 porém estudo programação desde 2017, atualmente trabalho diretamente com C# com .NET Core, Javascript e Typescript como linguagem de programação mais especificamente com frameworks como AngularJS, Reactjs e Nextjs além de Kotlin para mobile e SQL Server como banco de dados, porém tenho conhecimento em Expressjs como backend em node e React Native como mobile. Atualmente estou estudando Docker, além de estudar conceitos de arquitetura de projetos como Clean Architeture e DDD.</AboutText>
      </AboutContainer>
    </Container>
  );
}
