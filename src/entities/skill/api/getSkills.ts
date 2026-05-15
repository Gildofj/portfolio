import { isValidSkillCategory, isValidSkillType, Skill, SkillSkeleton } from "@/entities/skill/model/skill";
import { contentfulServiceFactory } from "@/services/contentful";

const contentfulService = contentfulServiceFactory();

export async function getSkills(locale: string): Promise<Skill[]> {
  const data = await contentfulService.getEntries<SkillSkeleton>({
    content_type: "skills",
    locale: locale,
  });

  const skillsData = data.items
    .sort(
      (a, b) =>
        new Date(a.sys.createdAt).getTime() -
        new Date(b.sys.createdAt).getTime(),
    )
    .flatMap(({ fields }) => ({
      title: fields.title,
      icon: fields.icon,
      types: (fields.types as string[]).filter(isValidSkillType),
      categories: (fields.categories as string[]).filter(isValidSkillCategory),
    }));

  return skillsData as Skill[];
}
