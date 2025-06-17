import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useMemo } from "react";
import { useIntl } from "react-intl";

import { Title } from "../_UI/Title";
import { TitleContainer } from "../_UI/TitleContainer";

import { Skill } from "./Skill";
import { SkillFilterDropdown } from "./SkillsFilterDropdown";
import { Container, Grid, Header } from "./styles";
import { useCategoryFilter } from "./useCategoryFilters";
import { useSkills } from "./useSkills";
import { useTypeFilters } from "./useTypeFilters";

export function Skills() {
  const intl = useIntl();
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
        ?.filter(skill => {
          const hasMatchingType = skill.types.some(type =>
            selectedTypes.includes(type)
          );
          const hasMatchingCategory = skill.categories.some(category =>
            selectedCategories.includes(category)
          );
          return hasMatchingType && hasMatchingCategory;
        })
        ?.sort((a, b) => {
          const categoryA = a.categories[0] ?? "";
          const categoryB = b.categories[0] ?? "";
          return categoryA.localeCompare(categoryB);
        }),
    [skills, selectedTypes, selectedCategories]
  );

  return (
    <Container id="skills">
      <TitleContainer>
        <Header>
          <MotionConfig transition={{ duration: 0.3 }}>
            <div />
            <Title
              initial={{ opacity: 0, transform: "translateX(-200px)" }}
              whileInView={{ opacity: 1, transform: "translateX(0px)" }}
              viewport={{ once: true }}
            >
              {intl.formatMessage({ id: "skills.title" })}
            </Title>
            <motion.div
              initial={{ opacity: 0, transform: "translateX(200px)" }}
              whileInView={{ opacity: 1, transform: "translateX(0px)" }}
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
        </Header>
      </TitleContainer>
      <Grid>
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
                icon={skill.icon}
                title={skill.title}
                categories={skill.categories}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
}
