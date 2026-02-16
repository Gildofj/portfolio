"use client";

import { Section } from "@/components/_UI/Section";
import { Tab, Tabs } from "@/components/_UI/Tabs";
import { Title } from "@/components/_UI/Title";
import { TitleContainer } from "@/components/_UI/TitleContainer";
import { HandshakeIcon, WrenchIcon } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Project, ProjectType } from "@/models/project";
import Image from "next/image";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [type, setType] = useState<ProjectType>(ProjectType.Personal);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch(
        `/api/project?locale=${locale}&type=${type}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data);
    };

    loadProjects();
  }, [locale, type]);

  return (
    <Section id="projects" className="gap-4">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>

        <Tabs>
          <Tab
            onClick={() => setType(ProjectType.Personal)}
            $active={type === ProjectType.Personal}
            initial={{ opacity: 0, x: "-1%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <WrenchIcon size={32} />
            {t("personalTabTitle")}
          </Tab>

          <Tab
            onClick={() => setType(ProjectType.Colaborations)}
            $active={type === ProjectType.Colaborations}
            initial={{ opacity: 0, x: "1%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <HandshakeIcon size={32} />
            {t("colaborationsTabTitle")}
          </Tab>
        </Tabs>

        <ul className="mt-12 grid gap-4 grid-cols-2 max-md:grid-cols-1">
          <AnimatePresence mode="wait">
            {projects?.map((p, i) => (
              <motion.li
                key={`${i}_${p.title}`}
                initial={{ x: i % 2 === 0 ? -10 : 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: i % 2 === 0 ? -10 : 10, opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 text-center"
              >
                <a
                  href={p.url}
                  title={p.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="h-46 w-86 rounded-xl border border-zinc-700"
                  >
                    <Image
                      src={
                        p.image.startsWith("//") ? `https:${p.image}` : p.image
                      }
                      alt={p.title}
                      title={p.title}
                      width={500}
                      height={500}
                      className="h-full w-full rounded-xl bg-white object-contain bg-no-repeat bg-cover"
                    />
                  </motion.div>
                  <div className="mt-3 text-center text-xl leading-7">
                    {p.title}
                  </div>
                  <span className="text-center opacity-70">
                    {p.description}
                  </span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </MotionConfig>
    </Section>
  );
}
