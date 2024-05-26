import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { SOCIALS } from "../constants";
import {
  Container,
  FooterContainer,
  FooterSocial,
  Link,
  Authors,
} from "./styles";
import { useIntl } from "react-intl";

export function Footer() {
  const intl = useIntl();

  const getIcon = (id: string, size: number) => {
    switch (id) {
      case "github":
        return <GithubLogo size={size} />;
      case "linkedin":
        return <LinkedinLogo size={size} />;
      case "instagram":
        return <InstagramLogo size={size} />;
      case "twitter":
        return <XLogo size={size} />;
    }
  };

  return (
    <Container>
      <FooterContainer>
        <Authors>
          &copy; 2023 Gildo Junior.{" "}
          {intl.formatMessage({ id: "footer.copyright" })}
        </Authors>
        <FooterSocial>
          {SOCIALS.map(({ id, urlRedirect }, i) => (
            <li key={i}>
              <Link
                href={urlRedirect}
                title={`Go to my ${id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(id, 32)}
              </Link>
            </li>
          ))}
        </FooterSocial>
      </FooterContainer>
    </Container>
  );
}
