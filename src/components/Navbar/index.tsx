import useReactPath from "../../hooks/useReactPath";
import { Brand, Container, Divider, Link, StyledList, StyledNav } from "./styles";

const navbarOptions = (urlPath: string) => [
  {
    id: 1,
    href: "#",
    text: "Home",
    active: ["", "#"].includes(urlPath)
  },
  {
    id: 2,
    href: "#about",
    text: "About",
    active: urlPath === "#about"
  },
  {
    id: 3,
    href: "#contact",
    text: "Contact",
    active: urlPath === "#contact"
  },
]

export function Navbar() {
  const urlPath = useReactPath();

  return (
    <Container>
      <StyledNav>
        <Brand>Portfolio</Brand>
        <StyledList>
          {navbarOptions(urlPath).map(({ id, href, text, active }) => (
            <li key={id}><Link active={active} href={href}>{text}</Link></li>
          ))}
        </StyledList>
      </StyledNav >
      <Divider />
    </Container >
  );
}
