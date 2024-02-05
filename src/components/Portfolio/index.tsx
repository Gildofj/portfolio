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
import { Tab, Tabs } from "../_UI/Tabs";
import { useState } from "react";
import { ProjectType } from "./types";
import { CodeWorking, ConstructOutline } from "react-ionicons";
import HoldHandsIcon from "../_UI/Icons/HoldHandsIcon";

interface PortfolioProps extends ScrollAnimatedProps {}

export function Portfolio({}: PortfolioProps) {
  const { portfolios } = usePortfolio();
  const intl = useIntl();
  const [type, setType] = useState<ProjectType>(ProjectType.Personal);

  return (
    <Container id="portfolio">
      <TitleContainer>
        <Title>{intl.formatMessage({ id: "portfolio.title" })}</Title>
      </TitleContainer>

      <Tabs>
        <Tab
          onClick={() => setType(ProjectType.Personal)}
          $active={type === ProjectType.Personal}
        >
          <ConstructOutline height="32px" width="32px" />
          {intl.formatMessage({ id: "portfolio.personalTabTitle" })}
        </Tab>

        <Tab
          onClick={() => setType(ProjectType.Colaborations)}
          $active={type === ProjectType.Colaborations}
        >
          <HoldHandsIcon />
          {intl.formatMessage({ id: "portfolio.colaborationsTabTitle" })}
        </Tab>
      </Tabs>

      <ProjectsList>
        {portfolios
          ?.filter(p => p.type === type)
          ?.map((p, i) => (
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
