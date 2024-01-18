import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
import { ScrollAnimatedProps } from "../types";
import {
  Container,
  Image,
  Description,
  NameProject,
  ProjectsList,
  ImageContainer,
  ProjectsListItem,
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

      <ProjectsList>
        {portfolios?.map((p, i) => (
          <ProjectsListItem key={i}>
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageContainer>
                <Image src={p.image} alt={p.title}></Image>
              </ImageContainer>
              <NameProject>{p.title}</NameProject>
              <Description>{p.description}</Description>
            </a>
          </ProjectsListItem>
        ))}
      </ProjectsList>
    </Container>
  );
}
