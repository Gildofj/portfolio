import { Title } from "../_UI/Title";
import {
  AboutContainer,
  AboutText,
  AnchorImage,
  Brand,
  Button,
  ButtonsGroup,
  Container,
  DescriptionProfile,
  Image,
  Name,
  Profile,
  WelcomeContainer,
  WelcomeText,
} from "./styles";

export function About() {
  return (
    <Container>
      <Profile>
        <AnchorImage href="https://github.com/Gildofj" target="_blank">
          <Image />
        </AnchorImage>
        <Name>Gildo Junior</Name>
        <DescriptionProfile>Desenvolvedor Full-Stack</DescriptionProfile>
        <ButtonsGroup id="about">
          <Button href="/portfolio/assets/files/resume-gildo.pdf" download>Download CV</Button>
          <Button href="#contact" transparent>Entre em contato</Button>
        </ButtonsGroup>
      </Profile>

      <WelcomeContainer>
        <WelcomeText>Bem-vindo ao meu</WelcomeText>
        <Brand>Portfólio!</Brand>
      </WelcomeContainer>

      <AboutContainer>
        <Title>Sobre mim</Title>
        <AboutText>Sou manezinho da ilha nascido e criado em Florianópolis, Santa Catarina, me formei em Análise e Desenvolvimento de Sistemas e atuo na área de desenvolvimento desde o inicio de 2020 porém estudo programação desde 2017, atualmente trabalho diretamente com C# com .NET Core, Javascript e Typescript como linguagem de programação mais especificamente com frameworks como AngularJS, ReactJS e NextJS além de Kotlin para mobile e SQL Server como banco de dados, porém tenho conhecimento em ExpressJS como backend em node e React Native como mobile. Atualmente estou estudando Docker, além de estudar conceitos de arquitetura de projetos como Clean Architeture e DDD.</AboutText>
      </AboutContainer>
    </Container>
  );
}
