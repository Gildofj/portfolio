import { MotionConfig } from "motion/react";
import { useIntl } from "react-intl";

import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { AboutText, Container } from "./styles";

export function About() {
  const intl = useIntl();

  return (
    <Container id="about">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, transform: "translateX(-200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          viewport={{ once: true }}
        >
          <Title>{intl.formatMessage({ id: "about.title" })}</Title>
        </TitleContainer>
        <AboutText
          initial={{ opacity: 0, transform: "translateX(200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
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
