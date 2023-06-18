import { useMemo, useState } from "react";
import { Title } from "../_UI/Title";
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
import { QualificationInfoModal } from "./QualificationInfoModal";
import { TitleContainer } from "../_UI/TitleContainer";
import { useQualification } from "./useQualification";
import { ScrollAnimatedProps } from "../types";

interface QualificationProps extends ScrollAnimatedProps { }

export function Qualification({ }: QualificationProps) {
  const [type, setType] = useState<QualificationType>(QualificationType.Experience);
  const { qualifications } = useQualification(type);

  const itens = useMemo(() => qualifications?.map((q, i) => {
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
            <DataSubTitle>{q.country} - {q.organization}</DataSubTitle>
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
            <DataSubTitle>{q.country} - {q.organization}</DataSubTitle>
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
      )
    }
  }), [qualifications]);

  return (
    <Container id="qualification">
      <TitleContainer>
        <Title>Qualificação</Title>
      </TitleContainer>

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
