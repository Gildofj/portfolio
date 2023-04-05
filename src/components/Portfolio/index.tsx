import { Title } from "../_UI/Title";
import { ArrowIcon, CardProject, Container, Image, Link, NameProject, ProjectsContainer } from "./styles";

const portfolios = [
  {
    id: 1,
    name: "Portfolio",
    urlRepo: "https://github.com/Gildofj/portfolio",
    image: "/portfolio/assets/images/portfolio.png"
  },
  {
    id: 2,
    name: "API PharmaGO",
    urlRepo: "https://github.com/Gildofj/PharmaGOBackend",
    image: "/portfolio/assets/images/pharmago.png"
  }
]

export function Portfolio() {
  return (
    <Container>
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