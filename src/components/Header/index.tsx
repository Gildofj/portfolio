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

interface HeaderProps {
  handleHeaderItemClick: () => void;
}

export function Header({ handleHeaderItemClick }: HeaderProps) {
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
          <LinkLogo href="/portfolio/">
            <LogoIcon
              color={theme !== "light" ? "#d4d4d8" : "#18181b"}
              height="1.8rem"
              width="1.8rem"
            />
            Gildo Junior
          </LinkLogo>
        </Logo>
        <HeaderList $open={open}>
          {getNavigation(urlPath).map(({ id, href, text, active }) => (
            <li key={id}>
              <Link
                $active={active}
                $open={open}
                onClick={() => handleHeaderItemClick()}
                href={href}
                data-to-scrollspy-id={href.replace("#", "")}
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <Link
              $active={false}
              $open={open}
              href="https://gildofj.github.io/uses"
            >
              Setup
            </Link>
          </li>
        </HeaderList>
        <HeaderSocial>
          {SOCIALS.map((social, i) => (
            <SocialLink
              key={i}
              href={social.urlRedirect}
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
