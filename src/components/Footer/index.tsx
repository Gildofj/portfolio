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
  Authors,
} from "./styles";

export function Footer() {
  const getIcon = (id: string, size: string) => {
    switch (id) {
      case "github":
        return <LogoGithub width={size} height={size} />;
      case "linkedin":
        return <LogoLinkedin width={size} height={size} />;
      case "instagram":
        return <LogoInstagram width={size} height={size} />;
      case "twitter":
        return <LogoTwitter width={size} height={size} />;
    }
  };

  return (
    <Container>
      <FooterContainer>
        <Authors>
          &copy; 2023 Gildo Junior. Todos os direitos reservados.
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
