import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Divider } from "../_UI/Divider";
import { Overlay } from "../_UI/Overlay";
import { getNavigation } from "../constants";
import {
  Container,
  LeftLogo,
  Link,
  NavbarButton,
  NavbarIcon,
  RightLogo,
  StyledList,
  StyledNav,
} from "./styles";

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
        <LeftLogo src="https://gildofj.github.io/portfolio/assets/images/logo.png" />
        <NavbarButton onClick={() => setOpen(!open)}>
          <NavbarIcon className="bx bx-menu"></NavbarIcon>
        </NavbarButton>
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
        <RightLogo src="http://localhost:5173/portfolio/assets/images/logo.png" />
      </StyledNav>
      <Divider />
    </Container>
  );
}
