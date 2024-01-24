import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Overlay } from "../_UI/Overlay";
import { SOCIALS, getNavigation } from "../constants";
import {
  Header as HeaderContainer,
  Link,
  LinkLogo,
  Logo,
  HeaderButton,
  HeaderSocial,
  SocialLink,
  HeaderList,
  Nav,
  LogoIcon,
} from "./styles";
import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  MenuSharp,
} from "react-ionicons";
import { ToggleThemeButton } from "./ToggleTheme";
import { useTheme } from "../../contexts/ThemeContext";
import { LocaleDropdownMenu } from "./LocaleDropdownMenu";
import { useIntl } from "react-intl";

interface HeaderProps {
  handleHeaderItemClick: () => void;
}

export function Header({ handleHeaderItemClick }: HeaderProps) {
  const intl = useIntl();
  const urlPath = useReactPath();
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setOpen(false);
  }, [urlPath]);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, []);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

  const getIcon = (id: string, color: string, size: string) => {
    switch (id) {
      case "github":
        return <LogoGithub color={color} width={size} height={size} />;
      case "linkedin":
        return <LogoLinkedin color={color} width={size} height={size} />;
      case "instagram":
        return <LogoInstagram color={color} width={size} height={size} />;
      case "twitter":
        return <LogoTwitter color={color} width={size} height={size} />;
    }
  };

  return (
    <HeaderContainer>
      {open && <Overlay onClick={() => setOpen(!open)} />}
      <Nav>
        <Logo>
          <LinkLogo href="/portfolio/" title="Go to top of page">
            <LogoIcon
              color={theme !== "light" ? "#d4d4d8" : "#18181b"}
              height="1.8rem"
              width="1.8rem"
            />
            Gildo Junior
          </LinkLogo>
        </Logo>
        <HeaderList $open={open}>
          {getNavigation(urlPath).map(({ id, href, textId, active }) => (
            <li key={id}>
              <Link
                $active={active}
                $open={open}
                onClick={() => handleHeaderItemClick()}
                href={href}
                data-to-scrollspy-id={href.replace("#", "")}
                title={textId}
              >
                {intl.formatMessage({ id: textId })}
              </Link>
            </li>
          ))}
          <li>
            <Link
              $active={false}
              $open={open}
              $withIcon
              href="https://github.com/Gildofj/portfolio/"
              title="Website source code"
              target="_blank"
            >
              <LogoGithub
                color={theme !== "light" ? "#d4d4d8" : "#18181b"}
                width="16px"
                height="16px"
              />
              {intl.formatMessage({ id: "header.source" })}
            </Link>
          </li>
        </HeaderList>
        <HeaderSocial>
          {SOCIALS.map((social, i) => (
            <SocialLink
              key={i}
              href={social.urlRedirect}
              title={`Go to my ${social.id}`}
              target="_blank"
              $hideOnSmall={
                social.id === "twitter" || social.id === "instagram"
              }
            >
              <span className="sr-only">{social.sr}</span>
              {getIcon(
                social.id,
                theme !== "light" ? "#d4d4d8" : "#18181b",
                "32px",
              )}
            </SocialLink>
          ))}
          <ToggleThemeButton />
          <LocaleDropdownMenu />
          <HeaderButton onClick={() => setOpen(!open)}>
            <MenuSharp
              width="20px"
              height="20px"
              color={theme !== "light" ? "#d4d4d8" : "#18181b"}
            />
          </HeaderButton>
        </HeaderSocial>
      </Nav>
    </HeaderContainer>
  );
}
