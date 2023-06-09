import { useEffect, useMemo, useState } from "react";
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
import { Qualification as IQualification, QualificationType, QualificationsSkeleton } from "./types";
import { QualificationInfoModal } from "./QulificationInfoModal";
import { TitleContainer } from "../_UI/TitleContainer";
import { contentfulClient } from "../../config/Contentful";

export function Qualification() {
  const [qualifications, setQualifications] = useState<IQualification[]>();
  const [type, setType] = useState<QualificationType>(QualificationType.Experience);

  async function getQualifications(type: QualificationType, active: boolean) {
    if (!active) return;

    const data = await contentfulClient.getEntries<QualificationsSkeleton>();

    const qualificationData = data.items
      .filter(item => item.fields.type === type)
      .flatMap(item => ({
        title: item.fields.title,
        organization: item.fields.organization,
        country: item.fields.country,
        state: item.fields.state,
        city: item.fields.city,
        startDate: item.fields.startDate,
        endDate: item.fields.endDate,
        workModel: item.fields.workModel,
        description: item.fields.description,
        certificateId: item.fields.certificateId,
        certificateUrl: item.fields.certificateUrl,
      }));

    setQualifications(qualificationData as IQualification[]);
  }

  useEffect(() => {
    let active = true
    getQualifications(type, active)
    return () => { active = false }
  });

  useEffect(() => {
    let active = true
    getQualifications(type, active)
    return () => { active = false }
  }, [type]);

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
