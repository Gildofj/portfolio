import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
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
      <TitleContainer>
        <Title>Portfólio</Title>
      </TitleContainer>

      <ProjectsContainer>
        {portfolios.map(p => (
          <CardProject key={p.id}>
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
