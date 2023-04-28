import { Divider } from "../_UI/Divider";
import { SOCIALS } from "./constants";
import {
  Container,
  FooterContainer,
  FooterSocial,
  FooterTitle,
  Link,
  SocialIcon
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
              <Link href={urlRedirect} target="_blank">
                <SocialIcon className={`bx ${icon}`}></SocialIcon>
              </Link>
            </li>
          ))}
        </FooterSocial>
        <span>Todos os direitos reservados. © 2023 Gildo Junior</span>
      </FooterContainer>
    </Container>
  )
}
