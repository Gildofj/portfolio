import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Overlay } from "../_UI/Overlay";
import { getNavigation } from "../constants";
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
import { LogoGithub, LogoTwitter, MenuSharp } from "react-ionicons";

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
          <SocialLink href="https://twitter.com/tao_gildao" target="_blank">
            <span className="sr-only">Follow Me on Twitter</span>
            <LogoTwitter width="32px" height="32px" color="#d4d4d8" />
          </SocialLink>
          <SocialLink href="https://github.com/gildofj" target="_blank">
            <span className="sr-only">Go to my Github</span>
            <LogoGithub width="32px" height="32px" color="#d4d4d8" />
          </SocialLink>
          <HeaderButton onClick={() => setOpen(!open)}>
            <MenuSharp width="20px" height="20px" color="#d4d4d8" />
          </HeaderButton>
        </HeaderSocial>
      </Nav>
    </HeaderContainer>
  );
}
