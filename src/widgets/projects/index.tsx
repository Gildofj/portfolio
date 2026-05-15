"use client";

import { Section } from "@/shared/ui/Section";
import { Tab, Tabs } from "@/shared/ui/Tabs";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import { HandshakeIcon, WrenchIcon } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, m } from "motion/react";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Project, ProjectType } from "@/entities/project/model/project";
import Image from "next/image";

interface ProjectsProps {
  initialProjects: Project[];
}

export function Projects({ initialProjects }: ProjectsProps) {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [type, setType] = useState<ProjectType>(ProjectType.Personal);

  useEffect(() => {
    // Skip first load if we have initial data and type is Personal (default)
    if (type === ProjectType.Personal && initialProjects.length > 0 && projects === initialProjects) {
       return;
    }

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
              <m.li
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
                  <m.div
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
                      className="h-full w-full rounded-xl bg-white object-cover bg-no-repeat bg-cover"
                    />
                  </m.div>
                  <div className="mt-3 text-center text-xl leading-7">
                    {p.title}
                  </div>
                  <span className="text-center opacity-70">
                    {p.description}
                  </span>
                </a>
              </m.li>
            ))}
          </AnimatePresence>
        </ul>
      </MotionConfig>
    </Section>
  );
}
