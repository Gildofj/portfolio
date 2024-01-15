import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
import { SOCIALS } from "../constants";
import {
  Container,
  FooterContainer,
  FooterSocial,
  Link,
  SocialIcon,
  Authors,
} from "./styles";

export function Footer() {
  const getIcon = (id: string, size: string) => {
    switch (id) {
      case "github":
        return <LogoGithub color="#d6d6d8" width={size} height={size} />;
      case "linkedin":
        return <LogoLinkedin color="#d6d6d8" width={size} height={size} />;
      case "instagram":
        return <LogoInstagram color="#d6d6d8" width={size} height={size} />;
      case "twitter":
        return <LogoTwitter color="#d6d6d8" width={size} height={size} />;
    }
  };

  return (
    <Container>
      <FooterContainer>
        <Authors>
          Todos os direitos reservados. &copy; 2023 Gildo Junior
        </Authors>
        <FooterSocial>
          {SOCIALS.map(({ id, urlRedirect }, i) => (
            <li key={i}>
              <Link
                href={urlRedirect}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(id, "32px")}
              </Link>
            </li>
          ))}
        </FooterSocial>
      </FooterContainer>
    </Container>
  );
}
