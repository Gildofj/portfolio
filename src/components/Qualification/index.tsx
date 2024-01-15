import { useMemo, useState } from "react";
import { BookOutline, BriefcaseOutline } from "react-ionicons";

import { Title } from "../_UI/Title";
import {
  Container,
  Content,
  Tabs,
  Tab,
  Section,
  SectionContent,
  Data,
  DataTitle,
  DataSubTitle,
  DataCalendar,
  Rounder,
  Line,
} from "./styles";
import { QualificationType } from "./types";
import { QualificationInfoModal } from "./QualificationInfoModal";
import { TitleContainer } from "../_UI/TitleContainer";
import { useQualification } from "./useQualification";
import { ScrollAnimatedProps } from "../types";

interface QualificationProps extends ScrollAnimatedProps {}

export function Qualification({}: QualificationProps) {
  const [type, setType] = useState<QualificationType>(
    QualificationType.Experience,
  );
  const { qualifications } = useQualification(type);

  const itens = useMemo(
    () =>
      qualifications?.map((q, i) => {
        if ((i + 1) % 2 === 0) {
          return (
            <Data key={i}>
              <div />

              <div>
                <Rounder />
                <Line />
              </div>

              <div>
                <DataTitle>{q.title}</DataTitle>
                <DataSubTitle>
                  {q.country} - {q.organization}
                </DataSubTitle>
                <DataCalendar>
                  <i className="bx bx-calendar"></i> {q.startDate} - {q.endDate}
                </DataCalendar>
                <QualificationInfoModal qualification={q} />
              </div>
            </Data>
          );
        } else {
          return (
            <Data key={i}>
              <div>
                <DataTitle>{q.title}</DataTitle>
                <DataSubTitle>
                  {q.country} - {q.organization}
                </DataSubTitle>
                <DataCalendar>
                  <i className="bx bx-calendar"></i> {q.startDate} - {q.endDate}
                </DataCalendar>
                <QualificationInfoModal qualification={q} />
              </div>

              <div>
                <Rounder />
                <Line />
              </div>
            </Data>
          );
        }
      }),
    [qualifications],
  );

  return (
    <Container id="qualification">
      <TitleContainer>
        <Title>Qualificação</Title>
      </TitleContainer>

      <Content>
        <Tabs>
          <Tab
            onClick={() => setType(QualificationType.Experience)}
            active={type === QualificationType.Experience}
          >
            <BriefcaseOutline
              color={
                type === QualificationType.Experience ? "#a855df7" : "#d4d4d8"
              }
              height="32px"
              width="32px"
            />
            Experiência
          </Tab>

          <Tab
            onClick={() => setType(QualificationType.Education)}
            active={type === QualificationType.Education}
          >
            <BookOutline
              color={
                type === QualificationType.Education ? "#a855df7" : "#d4d4d8"
              }
              height="32px"
              width="32px"
            />
            Educação
          </Tab>
        </Tabs>

        <Section>
          <SectionContent>{itens}</SectionContent>
        </Section>
      </Content>
    </Container>
  );
}
