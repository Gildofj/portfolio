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
          <div />
          <Title>{intl.formatMessage({ id: "skills.title" })}</Title>
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
        </Header>
      </TitleContainer>
      <Grid>
        {filteredSkills?.map((skill, i) => (
          <Skill
            key={i}
            icon={skill.icon}
            title={skill.title}
            categories={skill.categories}
          />
        ))}
      </Grid>
    </Container>
  );
}
