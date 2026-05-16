"use client";

import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import { TitleContainer } from "@/shared/ui/TitleContainer";
import { AnimatePresence, m, MotionConfig } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { SkillItem } from "./SkillItem";
import { SkillFilterDropdown } from "./SkillsFilterDropdown";
import { useCategoryFilter } from "./useCategoryFilters";
import { useTypeFilters } from "./useTypeFilters";
import { useLocale, useTranslations } from "next-intl";
import { IconName } from "@/shared/icons";
import { Skill } from "@/entities/skill/model/skill";

interface SkillsProps {
  initialSkills: Skill[];
}

export function Skills({ initialSkills }: SkillsProps) {
  const t = useTranslations("skills");
  const locale = useLocale();
  const { selectedTypes, allTypesSelected, toggleType, toggleSelectAllTypes } =
    useTypeFilters();
  const {
    selectedCategories,
    allCategoriesSelected,
    toggleCategory,
    toggleSelectAllCategories,
  } = useCategoryFilter();

  const [skills, setSkills] = useState<Skill[]>(() => {
    return initialSkills.filter((skill) => {
      const typeMatch = skill.types.some((t) => selectedTypes.includes(t));
      const categoryMatch = skill.categories.some((c) =>
        selectedCategories.includes(c),
      );
      return typeMatch && categoryMatch;
    });
  });

  const typesKey = JSON.stringify(selectedTypes);
  const categoriesKey = JSON.stringify(selectedCategories);
  const lastFetchedRef = useRef<string>(
    JSON.stringify({ locale, typesKey, categoriesKey }),
  );

  useEffect(() => {
    const currentKey = JSON.stringify({ locale, typesKey, categoriesKey });

    if (lastFetchedRef.current === currentKey) {
      return;
    }

    const loadSkills = async () => {
      const response = await fetch(`/api/skill/getByFilter?locale=${locale}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedTypes, selectedCategories }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch skills");
      }

      const data = await response.json();
      setSkills(data);
      lastFetchedRef.current = currentKey;
    };

    loadSkills();
  }, [locale, typesKey, categoriesKey, selectedTypes, selectedCategories]);

  return (
    <Section id="skills" className="gap-8">
      <TitleContainer>
        <div className="flex w-full items-center justify-between">
          <MotionConfig transition={{ duration: 0.3 }}>
            <div />
            <Title
              initial={{ opacity: 0, x: "-10%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t("title")}
            </Title>
            <m.div
              initial={{ opacity: 0, x: "10%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SkillFilterDropdown
                selectedTypes={selectedTypes}
                allTypesSelected={allTypesSelected}
                toggleType={toggleType}
                toggleSelectAllTypes={toggleSelectAllTypes}
                selectedCategories={selectedCategories}
                allCategoriesSelected={allCategoriesSelected}
                toggleCategory={toggleCategory}
                toggleSelectAllCategories={toggleSelectAllCategories}
              />
            </m.div>
          </MotionConfig>
        </div>
      </TitleContainer>
      <div className="flex flex-wrap min-h-128 w-full items-start justify-center gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {skills?.map((skill, i) => (
            <m.div
              key={`${i}_${skill.title}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="w-[28%] sm:w-32 md:w-36 lg:w-40 flex-shrink-0 max-w-[12rem] min-w-[6.5rem]"
            >
              <SkillItem
                icon={skill.icon.toLowerCase() as IconName}
                title={skill.title}
                categories={skill.categories}
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
