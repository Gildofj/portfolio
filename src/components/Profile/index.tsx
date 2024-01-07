import { motion } from "framer-motion";

import { SOCIALS } from "../constants";
import {
  AnchorImage,
  Brand,
  Button,
  ButtonsGroup,
  Container,
  DescriptionProfile,
  Link,
  Name,
  ProfileContainer,
  ProfileImage,
  Social,
  SocialIcon,
  WelcomeContainer,
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
        <Social>
          {SOCIALS.map(({ icon, urlRedirect }, i) => (
            <motion.li
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i / 10 }}
            >
              <Link
                href={urlRedirect}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon className={`bx ${icon}`}></SocialIcon>
              </Link>
            </motion.li>
          ))}
        </Social>
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

      <WelcomeContainer>
        <WelcomeText
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Bem-vindo ao meu
        </WelcomeText>
        <Brand
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Portfólio!
        </Brand>
      </WelcomeContainer>
    </Container>
  );
}
