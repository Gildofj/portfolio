import { Tabs, Tab } from "@components/_UI/Tabs";
import { Title } from "@components/_UI/Title";
import { TitleContainer } from "@components/_UI/TitleContainer";
import { useLocale } from "@contexts/LocaleContext";
import { usePortfolioTheme } from "@contexts/ThemeContext";
import {
  BookOpenTextIcon,
  SuitcaseIcon,
  CalendarIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { useMemo, useState } from "react";
import { useIntl } from "react-intl";

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
              initial={{ x: "5%", opacity: 0 }}
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
                  <CalendarIcon size={20} />
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
              initial={{ x: "-5%", opacity: 0 }}
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
                  <CalendarIcon size={20} />
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
          initial={{ x: "-10%", opacity: 0 }}
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
              initial={{ x: "-1%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <SuitcaseIcon size={32} />
              {intl.formatMessage({ id: "qualification.experienceTabTitle" })}
            </Tab>

            <Tab
              onClick={() => setType(QualificationType.Education)}
              $active={type === QualificationType.Education}
              initial={{ x: "1%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <BookOpenTextIcon size={32} />
              {intl.formatMessage({ id: "qualification.educationTabTitle" })}
            </Tab>
          </Tabs>

          <TabContent>
            <TabItem>
              <AnimatePresence mode="popLayout">{itens}</AnimatePresence>
            </TabItem>
          </TabContent>
        </Content>
      </MotionConfig>
    </Container>
  );
}
