"use client";

import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import { m, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" className="gap-8">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>
        <m.div
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:text-justify text-center indent-0 sm:indent-4 px-4 sm:px-0"
        >
          <p>{t("firstParagraph")}</p>
          <p>{t("secondParagraph")}</p>
        </m.div>
      </MotionConfig>
    </Section>
  );
}
