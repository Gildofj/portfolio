import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useIntl } from "react-intl";

import { SOCIALS } from "../constants";

import {
  Container,
  FooterContainer,
  FooterSocial,
  Link,
  Authors,
} from "./styles";
import { useCopyright } from "./useCopyright";

export function Footer() {
  const intl = useIntl();
  const { startYear, currentYear } = useCopyright();

  const getIcon = (id: string, size: number) => {
    switch (id) {
      case "github":
        return <GithubLogoIcon size={size} />;
      case "linkedin":
        return <LinkedinLogoIcon size={size} />;
      case "instagram":
        return <InstagramLogoIcon size={size} />;
      case "twitter":
        return <XLogoIcon size={size} />;
    }
  };

  return (
    <Container>
      <FooterContainer>
        <Authors>
          &copy; {startYear}-{currentYear} Gildo Junior.{" "}
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
