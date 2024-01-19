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

interface HeaderProps {
  handleHeaderItemClick: () => void;
}

export function Header({ handleHeaderItemClick }: HeaderProps) {
  const urlPath = useReactPath();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [urlPath]);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, []);

  useEffect(() => {
    handleScrollWhenModalIsOpen(open);
  }, [open]);

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
    <HeaderContainer>
      {open && <Overlay onClick={() => setOpen(!open)} />}
      <Nav>
        <Logo>
          <LinkLogo href="/portfolio/">
            <LogoIcon color="#d4d4d8" height="1.8rem" width="1.8rem" />
            Gildo Junior
          </LinkLogo>
        </Logo>
        <HeaderList open={open}>
          {getNavigation(urlPath).map(({ id, href, text, active }) => (
            <li key={id}>
              <Link
                active={active}
                open={open}
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
              active={false}
              open={open}
              href="https://gildofj.github.io/uses"
            >
              Setup
            </Link>
          </li>
        </HeaderList>
        <HeaderSocial>
          {SOCIALS.map(social => (
            <SocialLink
              href={social.urlRedirect}
              target="_blank"
              hideOnSmall={social.id === "twitter" || social.id === "instagram"}
            >
              <span className="sr-only">{social.sr}</span>
              {getIcon(social.id, "32px")}
            </SocialLink>
          ))}
          <HeaderButton onClick={() => setOpen(!open)}>
            <MenuSharp width="20px" height="20px" color="#d4d4d8" />
          </HeaderButton>
        </HeaderSocial>
      </Nav>
    </HeaderContainer>
  );
}
