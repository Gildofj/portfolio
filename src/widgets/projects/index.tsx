"use client";

import { Section } from "@/shared/ui/Section";
import { Tab, Tabs } from "@/shared/ui/Tabs";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import { HandshakeIcon, WrenchIcon } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const lastFetchedRef = useRef<string>(JSON.stringify({ locale, type }));

  useEffect(() => {
    const currentKey = JSON.stringify({ locale, type });
    
    // Skip if parameters haven't changed since last fetch
    if (lastFetchedRef.current === currentKey) {
      return;
    }

    const loadProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/project?locale=${locale}&type=${type}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
        lastFetchedRef.current = currentKey;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [locale, type]);

  return (
    <Section id="projects" className="gap-8">
      <MotionConfig transition={{ duration: 0.3 }}>
        <TitleContainer
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title>{t("title")}</Title>
        </TitleContainer>

        <div className="flex flex-col items-center gap-12 w-full">
          <Tabs>
            <Tab
              onClick={() => setType(ProjectType.Personal)}
              active={type === ProjectType.Personal}
              className="flex items-center gap-2"
            >
              <WrenchIcon size={24} weight="bold" />
              {t("personalTabTitle")}
            </Tab>

            <Tab
              onClick={() => setType(ProjectType.Colaborations)}
              active={type === ProjectType.Colaborations}
              className="flex items-center gap-2"
            >
              <HandshakeIcon size={24} weight="bold" />
              {t("colaborationsTabTitle")}
            </Tab>
          </Tabs>

          <m.div 
            layout
            animate={{ opacity: isLoading ? 0.6 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-full min-h-[400px]"
          >
            <m.div 
              layout
              className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {projects?.map((p, i) => (
                  <m.div
                    key={p.title + p.image}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25,
                      delay: i * 0.05 
                    }}
                    className="w-full max-w-[22rem]"
                  >
                    <a
                      href={p.url}
                      title={p.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-4"
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 shadow-neu-flat transition-all duration-500 group-hover:shadow-neu-hover group-hover:border-primary/30">
                        <Image
                          src={p.image.startsWith("//") ? `https:${p.image}` : p.image}
                          alt={p.title}
                          title={p.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex flex-col items-center text-center gap-1">
                        <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-primary">
                          {p.title}
                        </h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 max-w-[90%]">
                          {p.description}
                        </p>
                      </div>
                    </a>
                  </m.div>
                ))}
              </AnimatePresence>
            </m.div>
          </m.div>
        </div>
      </MotionConfig>
    </Section>
  );
}
