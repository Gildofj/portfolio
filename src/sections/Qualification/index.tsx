"use client";

import { Section } from "@/components/_UI/Section";
import { Tabs, Tab } from "@/components/_UI/Tabs";
import { Title } from "@/components/_UI/Title";
import { TitleContainer } from "@/components/_UI/TitleContainer";
import { usePortfolioTheme } from "@/contexts/ThemeContext";
import {
  BookOpenTextIcon,
  SuitcaseIcon,
  CalendarIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useMemo, useState } from "react";

import { QualificationInfoModal } from "./QualificationInfoModal";
import { QualificationType } from "./types";
import { useQualification } from "./useQualification";
import { useLocale, useTranslations } from "next-intl";

export function Qualification() {
  const t = useTranslations("qualification");
  const locale = useLocale();
  const { theme } = usePortfolioTheme();
  const [type, setType] = useState<QualificationType>(
    QualificationType.Experience,
  );
  const { qualifications } = useQualification(type);

  const itens = useMemo(
    () =>
      qualifications?.map((q, i) => {
        if ((i + 1) % 2 === 0) {
          return (
            <motion.div
              key={`${i}_${q.title}`}
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-[1.5fr_max-content_1.5fr] gap-6 max-[400px]:grid-cols-[8rem_max-content_8rem] max-[400px]:gap-4"
            >
              <div />

              <div>
                <div className="inline-block h-[13px] w-[13px] rounded-full bg-primary" />
                <div className="block h-full w-px -translate-y-2 translate-x-1.5 bg-primary" />
              </div>

              <div>
                <div className="font-semibold">{q.title}</div>
                <div className="mb-4 inline-block text-sm leading-5 text-zinc-900 dark:text-zinc-300">
                  {q.country} - {q.organization}
                </div>
                <div className="flex gap-1 text-sm leading-5 text-zinc-900 dark:text-zinc-300 [&_span_svg]:fill-zinc-900 dark:[&_span_svg]:fill-zinc-300">
                  <CalendarIcon size={20} />
                  {q.startDate} - {q.endDate}
                </div>
                <QualificationInfoModal qualification={q} />
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={`${i}_${q.title}`}
              initial={{ x: "-5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-[1.5fr_max-content_1.5fr] gap-6 max-[400px]:grid-cols-[8rem_max-content_8rem] max-[400px]:gap-4"
            >
              <div>
                <div className="font-semibold">{q.title}</div>
                <div className="mb-4 inline-block text-sm leading-5 text-zinc-900 dark:text-zinc-300">
                  {q.country} - {q.organization}
                </div>
                <div className="flex gap-1 text-sm leading-5 text-zinc-900 dark:text-zinc-300 [&_span_svg]:fill-zinc-900 dark:[&_span_svg]:fill-zinc-300">
                  <CalendarIcon size={20} />
                  {q.startDate} - {q.endDate}
                </div>
                <QualificationInfoModal qualification={q} />
              </div>

              <div>
                <div className="inline-block h-[13px] w-[13px] rounded-full bg-primary" />
                <div className="block h-full w-px -translate-y-2 translate-x-1.5 bg-primary" />
              </div>
            </motion.div>
          );
        }
      }),
    [qualifications, theme, locale],
  );

  return (
    <Section id="qualification" className="w-auto gap-12">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>

        <div className="mx-auto flex max-w-3xl min-h-120 flex-col gap-20 max-[992px]:mx-auto">
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
              {t("experienceTabTitle")}
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
              {t("educationTabTitle")}
            </Tab>
          </Tabs>

          <div className="grid justify-center max-[576px]:grid-cols-none grid-cols-[1.5fr]">
            <div className="block">
              <AnimatePresence mode="popLayout">{itens}</AnimatePresence>
            </div>
          </div>
        </div>
      </MotionConfig>
    </Section>
  );
}
