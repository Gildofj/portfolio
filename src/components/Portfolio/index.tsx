import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { ScrollAnimatedProps } from "../types";
import {
  ArrowIcon,
  CardProject,
  Container,
  Image,
  Link,
  NameProject,
  ProjectsContainer,
  ImageContainer,
} from "./styles";
import { usePortfolio } from "./usePortfolio";

interface PortfolioProps extends ScrollAnimatedProps {}

export function Portfolio({}: PortfolioProps) {
  const { portfolios } = usePortfolio();

  return (
    <Container id="portfolio">
      <TitleContainer>
        <Title>Portfólio</Title>
      </TitleContainer>

      <ProjectsContainer>
        {portfolios?.map(p => (
          <CardProject key={p.title}>
            <ImageContainer>
              <Image src={p.image} alt={p.title}></Image>
            </ImageContainer>
            <NameProject>{p.title}</NameProject>
            <Link href={p.url} target="_blank" rel="noopener noreferrer">
              Repository
              <ArrowIcon className="bx bx-right-arrow-alt"></ArrowIcon>
            </Link>
          </CardProject>
        ))}
      </ProjectsContainer>
    </Container>
  );
}
