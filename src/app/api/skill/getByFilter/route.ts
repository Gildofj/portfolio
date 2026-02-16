import {
  isValidSkillCategory,
  isValidSkillType,
  Skill,
  SkillSkeleton,
} from "@/models/skill";
import { contentfulServiceFactory } from "@/services/contentful";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

const contentfulService = contentfulServiceFactory();

export async function POST(request: NextRequest) {
  try {
    if (request.nextUrl.searchParams.has("locale") === false) {
      return NextResponse.json(
        { error: "Locale parameter is required" },
        { status: 400 },
      );
    }

    const locale = request.nextUrl.searchParams.get("locale")!;
    const { selectedTypes, selectedCategories } = await request.json();

    const data = await contentfulService.getEntries<SkillSkeleton>({
      content_type: "skills",
      locale: locale,
    });

    const skillsData = data.items
      .sort((a, b) =>
        moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt)),
      )
      .flatMap(({ fields }) => ({
        title: fields.title,
        icon: fields.icon,
        types: (fields.types as string[]).filter(isValidSkillType),
        categories: (fields.categories as string[]).filter(
          isValidSkillCategory,
        ),
      }));

    const filteredSkillsData = skillsData
      .filter((skill) => {
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
      });

    return NextResponse.json(filteredSkillsData as Skill[]);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 },
    );
  }
}
