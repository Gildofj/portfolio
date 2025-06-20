import { Title } from "@components/_UI/Title";
import { TitleContainer } from "@components/_UI/TitleContainer";
import { MotionConfig } from "motion/react";
import { useIntl } from "react-intl";

import { AboutText, Container } from "./styles";

export function About() {
  const intl = useIntl();

  return (
    <Container id="about">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title>{intl.formatMessage({ id: "about.title" })}</Title>
        </TitleContainer>
        <AboutText
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            {intl.formatMessage({
              id: "about.firstParagraph",
            })}
          </p>
          <p>
            {intl.formatMessage({
              id: "about.secondParagraph",
            })}
          </p>
        </AboutText>
      </MotionConfig>
    </Container>
  );
}
