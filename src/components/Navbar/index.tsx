import useReactPath from "../../hooks/useReactPath";
import { getNavigation } from "../constants";
import { Divider } from "../_UI/Divider";
import { Container, Link, StyledList, StyledNav } from "./styles";

export function Navbar() {
  const urlPath = useReactPath();

  return (
    <Container>
      <StyledNav>
        <StyledList>
          {getNavigation(urlPath).map(({ id, href, text, active }) => (
            <li key={id}><Link active={active} href={href}>{text}</Link></li>
          ))}
        </StyledList>
      </StyledNav >
      <Divider />
    </Container >
  );
}
