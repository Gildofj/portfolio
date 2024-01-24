import { useIntl } from "react-intl";
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
  CardProject,
} from "./styles";
import { usePortfolio } from "./usePortfolio";

interface PortfolioProps extends ScrollAnimatedProps {}

export function Portfolio({}: PortfolioProps) {
  const { portfolios } = usePortfolio();
  const intl = useIntl();

  return (
    <Container id="portfolio">
      <TitleContainer>
        <Title>{intl.formatMessage({ id: "portfolio.title" })}</Title>
      </TitleContainer>

      <ProjectsList>
        {portfolios?.map((p, i) => (
          <ProjectsListItem key={i}>
            <CardProject
              key={p.title}
              href={p.url}
              title={p.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageContainer>
                <Image src={p.image} alt={p.title} title={p.title} />
              </ImageContainer>
              <NameProject>{p.title}</NameProject>
              <Description>{p.description}</Description>
            </CardProject>
          </ProjectsListItem>
        ))}
      </ProjectsList>
    </Container>
  );
}
