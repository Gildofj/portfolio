import { BookOpenText, Suitcase, Calendar } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { useLocale } from "../../contexts/LocaleContext";
import { usePortfolioTheme } from "../../contexts/ThemeContext";
import { Tabs, Tab } from "../_UI/Tabs";
import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { QualificationInfoModal } from "./QualificationInfoModal";
import {
  Container,
  Content,
  TabContent,
  TabItem,
  Data,
  DataTitle,
  DataSubTitle,
  DataCalendar,
  Rounder,
  Line,
} from "./styles";
import { QualificationType } from "./types";
import { useQualification } from "./useQualification";

export function Qualification() {
  const intl = useIntl();
  const { locale } = useLocale();
  const { theme } = usePortfolioTheme();
  const [type, setType] = useState<QualificationType>(
    QualificationType.Experience
  );
  const { qualifications } = useQualification(type);

  const itens = useMemo(
    () =>
      qualifications?.map((q, i) => {
        if ((i + 1) % 2 === 0) {
          return (
            <Data
              key={`${i}_${q.title}`}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
            >
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
                  <Calendar size={20} />
                  {q.startDate} - {q.endDate}
                </DataCalendar>
                <QualificationInfoModal qualification={q} />
              </div>
            </Data>
          );
        } else {
          return (
            <Data
              key={`${i}_${q.title}`}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <DataTitle>{q.title}</DataTitle>
                <DataSubTitle>
                  {q.country} - {q.organization}
                </DataSubTitle>
                <DataCalendar>
                  <Calendar size={20} />
                  {q.startDate} - {q.endDate}
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
    [qualifications, theme, locale]
  );

  return (
    <Container id="qualification">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Title>{intl.formatMessage({ id: "qualification.title" })}</Title>
        </TitleContainer>

        <Content>
          <Tabs>
            <Tab
              onClick={() => setType(QualificationType.Experience)}
              $active={type === QualificationType.Experience}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Suitcase size={32} />
              {intl.formatMessage({ id: "qualification.experienceTabTitle" })}
            </Tab>

            <Tab
              onClick={() => setType(QualificationType.Education)}
              $active={type === QualificationType.Education}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BookOpenText size={32} />
              {intl.formatMessage({ id: "qualification.educationTabTitle" })}
            </Tab>
          </Tabs>

          <TabContent>
            <TabItem>
              <AnimatePresence mode="wait">{itens}</AnimatePresence>
            </TabItem>
          </TabContent>
        </Content>
      </MotionConfig>
    </Container>
  );
}
