"use client";

import { Section } from "@/components/_UI/Section";
import { Title } from "@/components/_UI/Title";
import { TitleContainer } from "@/components/_UI/TitleContainer";
import { motion } from "motion/react";
import { MotionConfig } from "motion/react";
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
        <motion.div
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-justify indent-4 max-[400px]:max-w-88"
        >
          <p>{t("firstParagraph")}</p>
          <p>{t("secondParagraph")}</p>
        </motion.div>
      </MotionConfig>
    </Section>
  );
}
