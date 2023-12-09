import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { handleScrollWhenModalIsOpen } from "../../utils/scroll";
import { Divider } from "../_UI/Divider";
import { Overlay } from "../_UI/Overlay";
import { getNavigation } from "../constants";
import { Container, Link, NavbarButton, NavbarIcon, StyledList, StyledNav } from "./styles";

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
  }, [])

  useEffect(() => {
    handleScrollWhenModalIsOpen(open)
  }, [open]);

  return (
    <Container>
      {open && <Overlay onClick={() => setOpen(!open)} />}
      <StyledNav>
        <NavbarButton onClick={() => setOpen(!open)}>
          <NavbarIcon className='bx bx-menu'></NavbarIcon>
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
        </StyledList>
      </StyledNav >
      <Divider />
    </Container >
  );
}
