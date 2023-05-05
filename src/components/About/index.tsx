import { Title } from "../_UI/Title";
import { SOCIALS } from "../constants";
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
  Link,
  Name,
  Profile,
  Social,
  SocialIcon,
  WelcomeContainer,
  WelcomeText,
} from "./styles";

export function About() {
  return (
    <Container>
      <Profile>
        <AnchorImage href="https://github.com/Gildofj" target="_blank" rel="noopener noreferrer">
          <Image />
        </AnchorImage>
        <Name>Gildo Junior</Name>
        <DescriptionProfile>Desenvolvedor Full-Stack</DescriptionProfile>
        <Social>
          {SOCIALS.map(({ icon, urlRedirect }, i) => (
            <li key={i}>
              <Link href={urlRedirect} target="_blank" rel="noopener noreferrer">
                <SocialIcon className={`bx ${icon}`}></SocialIcon>
              </Link>
            </li>
          ))}
        </Social>
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
        <AboutText>Eu sou natural de Florianópolis, Santa Catarina, e tenho formação em Análise e Desenvolvimento de Sistemas. Atuo na área de desenvolvimento desde o início de 2020, mas tenho estudado programação desde 2017. Atualmente, meu trabalho envolve principalmente a utilização de C# com .NET Core, além de Javascript e Typescript para o desenvolvimento de aplicações web e móveis. Eu sou experiente em frameworks como AngularJS, ReactJS e NextJS, e também tenho conhecimentos em Kotlin para o desenvolvimento de aplicativos móveis e SQL Server como banco de dados. Além disso, possuo habilidades em ExpressJS como backend em node e React Native como mobile.</AboutText>
        <AboutText>Durante o processo de estudo, tenho explorado o uso de Docker, bem como conceitos importantes em arquitetura de projetos, como Clean Architecture e Domain-Driven Design (DDD).</AboutText>
      </AboutContainer>
    </Container>
  );
}
