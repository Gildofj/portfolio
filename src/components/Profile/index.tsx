import { useIntl } from "react-intl";
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
  const intl = useIntl();

  return (
    <Container>
      <ProfileContainer>
        <AnchorImage
          href="https://github.com/Gildofj"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to my github"
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
          {intl.formatMessage({ id: "profile.subtitle" })}
        </DescriptionProfile>
        <ButtonsGroup>
          <Button
            href="/portfolio/assets/files/resume-gildo.pdf"
            title="Download my resume"
            download
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {intl.formatMessage({ id: "profile.cvButton" })}
          </Button>
          <Button
            href="#contact"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {intl.formatMessage({ id: "profile.contactMeButton" })}
          </Button>
        </ButtonsGroup>
      </ProfileContainer>

      <WelcomeText
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {intl.formatMessage({ id: "profile.welcome" })}{" "}
        <ColorizedText>
          {intl.formatMessage({ id: "profile.welcomeHighlight" })}
        </ColorizedText>
      </WelcomeText>
    </Container>
  );
}
