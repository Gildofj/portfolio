import { Title } from "../_UI/Title";
import { portfolios } from "./constants";
import {
  ArrowIcon,
  CardProject,
  Container,
  Image,
  Link,
  NameProject,
  ProjectsContainer,
} from "./styles";



export function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>

      <ProjectsContainer>
        {portfolios.map(p => (
          <CardProject>
            <Image src={p.image} alt={p.name} />
            <NameProject>{p.name}</NameProject>
            <Link href={p.urlRepo} target="_blank" rel="noopener noreferrer">
              Repository
              <ArrowIcon className="bx bx-right-arrow-alt"></ArrowIcon>
            </Link>
          </CardProject>)
        )}
      </ProjectsContainer>
    </Container >
  );
}
