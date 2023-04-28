import { useEffect, useState } from "react";
import useReactPath from "../../hooks/useReactPath";
import { getNavigation } from "../constants";
import { Divider } from "../_UI/Divider";
import { Container, Link, NavbarButton, NavbarIcon, StyledList, StyledNav } from "./styles";

export function Navbar() {
  const urlPath = useReactPath();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [urlPath]);

  return (
    <Container>
      <StyledNav>
        <NavbarButton onClick={() => setOpen(!open)}>
          <NavbarIcon className='bx bx-menu'></NavbarIcon>
        </NavbarButton>
        <StyledList open={open}>
          {getNavigation(urlPath).map(({ id, href, text, active }) => (
            <li key={id}>
              <Link active={active} open={open} href={href}>
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
