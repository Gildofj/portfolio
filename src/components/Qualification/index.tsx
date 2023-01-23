import { useMemo, useState } from "react";
import { Title } from "../_UI/Title";
import { EDUCATION, EXPERIENCE } from "./constants";
import {
  Container,
  Content,
  Tabs,
  Tab,
  QualificationIcon,
  Section,
  SectionContent,
  Data,
  DataTitle,
  DataSubTitle,
  DataCalendar,
  Rounder,
  Line
} from "./styles";
import { QualificationType } from "./types";

export function Qualification() {
  const [type, setType] = useState<QualificationType>(QualificationType.Experience);

  const qualifications = useMemo(() => type === QualificationType.Education ? EDUCATION : EXPERIENCE, [type]);

  const itens = useMemo(() => qualifications.map((q, i) => {
    if ((i + 1) % 2 === 0) {
      return (
        <Data key={q.id}>
          <div></div>

          <div>
            <Rounder></Rounder>
            <Line></Line>
          </div>

          <div>
            <DataTitle>{q.title}</DataTitle>
            <DataSubTitle>{q.country} - {q.organization}</DataSubTitle>
            <DataCalendar>
              <i className="bx bx-calendar"></i> {q.startDate} - {q.endDate}
            </DataCalendar>
          </div>
        </Data>
      );
    } else {
      return (
        <Data>
          <div>
            <DataTitle>{q.title}</DataTitle>
            <DataSubTitle>{q.country} - {q.organization}</DataSubTitle>
            <DataCalendar>
              <i className="bx bx-calendar"></i> {q.startDate} - {q.endDate}
            </DataCalendar>
          </div>

          <div>
            <Rounder></Rounder>
            <Line></Line>
          </div>
        </Data>
      )
    }
  }), [qualifications]);

  return (
    <Container id="qualification">
      <Title>Qualificação</Title>

      <Content>
        <Tabs>
          <Tab onClick={() => setType(QualificationType.Experience)} active={type === QualificationType.Experience}>
            <QualificationIcon active={type === QualificationType.Experience} className="bx bxs-briefcase-alt"></QualificationIcon> Experiência
          </Tab>

          <Tab onClick={() => setType(QualificationType.Education)} active={type === QualificationType.Education}>
            <QualificationIcon active={type === QualificationType.Education} className="bx bxs-graduation"></QualificationIcon> Educação
          </Tab>
        </Tabs>

        <Section>
          <SectionContent>
            {itens}
          </SectionContent>
        </Section>
      </Content>
    </Container>
  )
}
