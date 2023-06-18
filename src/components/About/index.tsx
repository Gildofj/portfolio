import { RefObject } from "react";
import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
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
import { motion } from "framer-motion";

export function About() {
  return (
    <Container>
      <Profile>
        <AnchorImage
          href="https://github.com/Gildofj"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image />
        </AnchorImage>
        <Name
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Gildo Junior
        </Name>
        <DescriptionProfile
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >Desenvolvedor Full-Stack</DescriptionProfile>
        <Social>
          {SOCIALS.map(({ icon, urlRedirect }, i) => (
            <motion.li
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i / 10 }}
            >
              <Link href={urlRedirect} target="_blank" rel="noopener noreferrer">
                <SocialIcon className={`bx ${icon}`}></SocialIcon>
              </Link>
            </motion.li>
          )
          )}
        </Social>
        <ButtonsGroup>
          <Button
            href="/portfolio/assets/files/resume-gildo.pdf"
            download
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >Download CV</Button>
          <Button
            href="#contact"
            transparent
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >Entre em contato</Button>
        </ButtonsGroup>
      </Profile>

      <WelcomeContainer>
        <WelcomeText
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >Bem-vindo ao meu</WelcomeText>
        <Brand
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >Portfólio!</Brand>
      </WelcomeContainer>

      <AboutContainer id="about">
        <TitleContainer>
          <Title>Sobre mim</Title>
        </TitleContainer>
        <AboutText>Eu sou natural de Florianópolis, Santa Catarina, e tenho formação em Análise e Desenvolvimento de Sistemas. Atuo na área de desenvolvimento desde o início de 2020, mas tenho estudado programação desde 2017. Atualmente, meu trabalho envolve principalmente a utilização de C# com .NET Core, além de Javascript e Typescript para o desenvolvimento de aplicações web e móveis. Eu sou experiente em frameworks como AngularJS, ReactJS e NextJS, e também tenho conhecimentos em Kotlin para o desenvolvimento de aplicativos móveis e SQL Server como banco de dados. Além disso, possuo habilidades em ExpressJS como backend em node e React Native como mobile.</AboutText>
        <AboutText>Durante o processo de estudo, tenho explorado o uso de Docker, bem como conceitos importantes em arquitetura de projetos, como Clean Architecture e Domain-Driven Design (DDD).</AboutText>
      </AboutContainer>
    </Container>
  );
}
