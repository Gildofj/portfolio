import useReactPath from "../../hooks/useReactPath";
import { getNavigation } from "../constants";
import { Divider } from "../_UI/Divider";
import { SOCIALS } from "./constants";
import { Container, FooterContainer, FooterNavigation, FooterSocial, FooterTitle, Link, SocialIcon } from "./styles";

export function Footer() {
  const urlPath = useReactPath();

  return (
    <Container>
      <Divider />
      <FooterContainer>
        <FooterTitle>Gildo Junior</FooterTitle>
        <FooterNavigation>
          {getNavigation(urlPath).map(({ id, href, text }) => (
            <li key={id}><Link href={href}>{text}</Link></li>
          ))}
        </FooterNavigation>
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