import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Overlay } from "../_UI/Overlay";
import { getNavigation } from "../constants";
import {
  Container,
  Link,
  LinkLogo,
  Logo,
  NavbarButton,
  NavbarIcon,
  NavbarSocial,
  SocialLink,
  StyledList,
  StyledNav,
} from "./styles";
import { CodeSlash, LogoGithub, LogoTwitter } from "react-ionicons";

interface NavbarProps {
  handleNavbarItemClick: () => void;
}

export function Navbar({ handleNavbarItemClick }: NavbarProps) {
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

  return (
    <Container>
      {open && <Overlay onClick={() => setOpen(!open)} />}
      <StyledNav>
        <NavbarButton onClick={() => setOpen(!open)}>
          <NavbarIcon />
        </NavbarButton>
        <Logo>
          <LinkLogo href="/portfolio/">
            <CodeSlash color="#ffffff" height="1.7rem" width="1.7rem" />
            Gildo Junior
          </LinkLogo>
        </Logo>
        <StyledList open={open}>
          {getNavigation(urlPath).map(({ id, href, text, active }) => (
            <li key={id}>
              <Link
                active={active}
                open={open}
                onClick={() => handleNavbarItemClick()}
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
        </StyledList>
        <NavbarSocial>
          <SocialLink href="https://twitter.com/tao_gildao" target="_blank">
            {/* <span class="sr-only">Follow Me on Twitter</span> */}
            <LogoTwitter width="32px" height="32px" color="#ffffff" />
          </SocialLink>
          <SocialLink href="https://github.com/gildofj" target="_blank">
            {/* <span class="sr-only">Go to my Github</span> */}
            <LogoGithub width="32px" height="32px" color="#ffffff" />
          </SocialLink>
        </NavbarSocial>
      </StyledNav>
    </Container>
  );
}
