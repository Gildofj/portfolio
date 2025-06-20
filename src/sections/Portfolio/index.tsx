import { Tab, Tabs } from "@components/_UI/Tabs";
import { Title } from "@components/_UI/Title";
import { TitleContainer } from "@components/_UI/TitleContainer";
import { HandshakeIcon, WrenchIcon } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { useState } from "react";
import { useIntl } from "react-intl";

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
import { ProjectType } from "./types";
import { usePortfolio } from "./usePortfolio";

export function Portfolio() {
  const { portfolios } = usePortfolio();
  const intl = useIntl();
  const [type, setType] = useState<ProjectType>(ProjectType.Personal);

  return (
    <Container id="portfolio">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title>{intl.formatMessage({ id: "portfolio.title" })}</Title>
        </TitleContainer>

        <Tabs>
          <Tab
            onClick={() => setType(ProjectType.Personal)}
            $active={type === ProjectType.Personal}
            initial={{ opacity: 0, x: "-1%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <WrenchIcon size={32} />
            {intl.formatMessage({ id: "portfolio.personalTabTitle" })}
          </Tab>

          <Tab
            onClick={() => setType(ProjectType.Colaborations)}
            $active={type === ProjectType.Colaborations}
            initial={{ opacity: 0, x: "1%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <HandshakeIcon size={32} />
            {intl.formatMessage({ id: "portfolio.colaborationsTabTitle" })}
          </Tab>
        </Tabs>

        <ProjectsList>
          <AnimatePresence mode="wait">
            {portfolios
              ?.filter(p => p.type === type)
              ?.map((p, i) => (
                <ProjectsListItem
                  key={`${i}_${p.title}`}
                  initial={{ x: i % 2 === 0 ? -10 : 10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: i % 2 === 0 ? -10 : 10, opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardProject
                    key={p.title}
                    href={p.url}
                    title={p.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImageContainer
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={p.image} alt={p.title} title={p.title} />
                    </ImageContainer>
                    <NameProject>{p.title}</NameProject>
                    <Description>{p.description}</Description>
                  </CardProject>
                </ProjectsListItem>
              ))}
          </AnimatePresence>
        </ProjectsList>
      </MotionConfig>
    </Container>
  );
}
