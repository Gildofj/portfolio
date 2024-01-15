import { motion } from "framer-motion";

import { SOCIALS } from "../constants";
import {
  AnchorImage,
  Button,
  ButtonsGroup,
  ColorizedText,
  Container,
  DescriptionProfile,
  Name,
  ProfileContainer,
  ProfileImage,
  WelcomeText,
} from "./styles";

export function Profile() {
  return (
    <Container>
      <ProfileContainer>
        <AnchorImage
          href="https://github.com/Gildofj"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProfileImage />
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
        >
          Desenvolvedor Full-Stack
        </DescriptionProfile>
        <ButtonsGroup>
          <Button
            href="/portfolio/assets/files/resume-gildo.pdf"
            download
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Download CV
          </Button>
          <Button
            href="#contact"
            transparent
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Entre em contato
          </Button>
        </ButtonsGroup>
      </ProfileContainer>

      <WelcomeText
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Bem-vindo ao meu <ColorizedText>Portfólio!</ColorizedText>
      </WelcomeText>
    </Container>
  );
}
