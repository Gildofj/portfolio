"use client";

import { Section } from "@/components/_UI/Section";
import { Title } from "@/components/_UI/Title";
import { TitleContainer } from "@/components/_UI/TitleContainer";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useMemo } from "react";

import { Skill } from "./Skill";
import { SkillFilterDropdown } from "./SkillsFilterDropdown";
import { useCategoryFilter } from "./useCategoryFilters";
import { useSkills } from "./useSkills";
import { useTypeFilters } from "./useTypeFilters";
import { useTranslations } from "next-intl";
import { IconName } from "@/shared/icons";

export function Skills() {
  const t = useTranslations("skills");
  const { skills } = useSkills();
  const { selectedTypes, allTypesSelected, toggleType, toggleSelectAllTypes } =
    useTypeFilters();
  const {
    selectedCategories,
    allCategoriesSelected,
    toggleCategory,
    toggleSelectAllCategories,
  } = useCategoryFilter();

  const filteredSkills = useMemo(
    () =>
      skills
        ?.filter((skill) => {
          const hasMatchingType = skill.types.some((type) =>
            selectedTypes.includes(type),
          );
          const hasMatchingCategory = skill.categories.some((category) =>
            selectedCategories.includes(category),
          );
          return hasMatchingType && hasMatchingCategory;
        })
        ?.sort((a, b) => {
          const categoryA = a.categories[0] ?? "";
          const categoryB = b.categories[0] ?? "";
          return categoryA.localeCompare(categoryB);
        }),
    [skills, selectedTypes, selectedCategories],
  );

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
            <motion.div
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
            </motion.div>
          </MotionConfig>
        </div>
      </TitleContainer>
      <div className="grid min-h-128 w-full items-start justify-center gap-4 max-md:grid-cols-3 max-[460px]:grid-cols-[repeat(2,10rem)] max-[460px]:gap-2 grid-cols-[repeat(5,8rem)]">
        <AnimatePresence mode="popLayout">
          {filteredSkills?.map((skill, i) => (
            <motion.div
              key={`${i}_${skill.title}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Skill
                icon={skill.icon.toLowerCase() as IconName}
                title={skill.title}
                categories={skill.categories}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
