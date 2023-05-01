import { Divider } from "../_UI/Divider";
import { SOCIALS } from "./constants";
import {
  Container,
  FooterContainer,
  FooterSocial,
  FooterTitle,
  Link,
  SocialIcon,
  Authors
} from "./styles";

export function Footer() {
  return (
    <Container>
      <Divider />
      <FooterContainer>
        <FooterTitle>Gildo Junior</FooterTitle>
        <FooterSocial>
          {SOCIALS.map(({ icon, urlRedirect }, i) => (
            <li key={i}>
              <Link href={urlRedirect} target="_blank" rel="noopener noreferrer">
                <SocialIcon className={`bx ${icon}`}></SocialIcon>
              </Link>
            </li>
          ))}
        </FooterSocial>
        <Authors>Todos os direitos reservados. © 2023 Gildo Junior</Authors>
      </FooterContainer>
    </Container>
  )
}
