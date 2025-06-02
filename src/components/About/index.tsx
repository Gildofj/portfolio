import { useIntl } from "react-intl";

import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { AboutText, Container } from "./styles";

export function About() {
  const intl = useIntl();

  return (
    <Container id="about">
      <TitleContainer>
        <Title>{intl.formatMessage({ id: "about.title" })}</Title>
      </TitleContainer>
      <AboutText>
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
    </Container>
  );
}
