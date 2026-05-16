"use client";

import { Section } from "@/shared/ui/Section";
import { Tabs, Tab } from "@/shared/ui/Tabs";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import {
  MapPinIcon,
  SuitcaseIcon,
  BookOpenTextIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, m } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { QualificationInfoModal } from "./QualificationInfoModal";
import {
  Qualification,
  QualificationType,
} from "@/entities/qualification/model/qualification";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/shared/utils/cn";

interface QualificationsProps {
  initialQualifications: Qualification[];
}

export function Qualifications({ initialQualifications }: QualificationsProps) {
  const t = useTranslations("qualification");
  const locale = useLocale();
  const [qualifications, setQualifications] = useState<Qualification[]>(
    initialQualifications,
  );
  const [type, setType] = useState<QualificationType>(
    QualificationType.Experience,
  );
  const lastFetchedRef = useRef<string>(JSON.stringify({ locale, type }));

  useEffect(() => {
    const currentKey = JSON.stringify({ locale, type });

    if (lastFetchedRef.current === currentKey) {
      return;
    }

    const loadQualifications = async () => {
      const response = await fetch(
        `/api/qualification?locale=${locale}&type=${type}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch qualifications");
      }

      const data = await response.json();
      setQualifications(data);
      lastFetchedRef.current = currentKey;
    };

    loadQualifications();
  }, [locale, type]);

  const renderCard = (q: Qualification) => (
    <div className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-6 shadow-neu-flat transition-all hover:shadow-neu-hover hover:border-primary/30 text-left w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
            {q.startDate} — {q.endDate}
          </span>
          <div className="flex items-center gap-1 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <MapPinIcon size={14} weight="bold" />
            {q.city}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            {q.title}
          </h4>
          <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            {q.organization}
          </span>
        </div>
        <div className="mt-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <QualificationInfoModal qualification={q} />
        </div>
      </div>
    </div>
  );

  const itens = useMemo(
    () =>
      qualifications?.map((q, i) => {
        const isEven = (i + 1) % 2 === 0;
        const isFirst = i === 0;
        const isLast = i === (qualifications?.length ?? 0) - 1;

        return (
          <m.div
            key={`${i}_${q.title}`}
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isEven ? 20 : -20 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            className={cn(
              "grid items-stretch w-full gap-x-6 md:gap-x-12",
              "grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr]",
            )}
          >
            {/* Left Column (Desktop Only) */}
            <div className="hidden md:flex flex-col items-end pt-2 pb-12">
              {!isEven && renderCard(q)}
            </div>

            {/* Timeline (Left on Mobile, Middle on Desktop) */}
            <div className="relative flex flex-col items-center min-h-full px-4 max-md:px-0 max-md:pr-2">
              {/* Vertical Line */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 w-0.5 sm:w-1 bg-zinc-200 dark:bg-zinc-800",
                  isFirst ? "top-4" : "top-0",
                  isLast ? "h-4" : "bottom-0",
                )}
              />

              {/* Dot */}
              <div className="relative flex items-center justify-center pt-2 z-10">
                <div className="relative flex items-center justify-center left-1 md:left-0">
                  <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />
                  <div className="absolute h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/20 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right Column (Desktop) / Main Column (Mobile) */}
            <div className="flex flex-col items-start pt-2 pb-12">
              {/* Mobile version */}
              <div className="md:hidden w-full">{renderCard(q)}</div>
              {/* Desktop version */}
              <div className="hidden md:block w-full">
                {isEven && renderCard(q)}
              </div>
            </div>
          </m.div>
        );
      }),
    [qualifications],
  );

  return (
    <Section id="qualification" className="w-full gap-12">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-16">
          <Tabs>
            <Tab
              onClick={() => setType(QualificationType.Experience)}
              active={type === QualificationType.Experience}
            >
              <SuitcaseIcon size={24} weight="bold" />
              {t("experienceTabTitle")}
            </Tab>

            <Tab
              onClick={() => setType(QualificationType.Education)}
              active={type === QualificationType.Education}
            >
              <BookOpenTextIcon size={24} weight="bold" />
              {t("educationTabTitle")}
            </Tab>
          </Tabs>

          <div className="flex flex-col">
            <AnimatePresence mode="wait">{itens}</AnimatePresence>
          </div>
        </div>
      </MotionConfig>
    </Section>
  );
}
