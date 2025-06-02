import { useIntl } from "react-intl";

import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";
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
import { Handshake, Wrench } from "@phosphor-icons/react";

export function Portfolio() {
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
          <Wrench size={32} />
          {intl.formatMessage({ id: "portfolio.personalTabTitle" })}
        </Tab>

        <Tab
          onClick={() => setType(ProjectType.Colaborations)}
          $active={type === ProjectType.Colaborations}
        >
          <Handshake size={32} />
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
