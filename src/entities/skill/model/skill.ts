import { EntryFieldTypes } from "contentful";

export enum SkillType {
  MAIN = "main",
  BACKEND = "backend",
  FRONTEND = "frontend",
  MOBILE = "mobile",
  OTHER = "other",
}

export enum SkillCategory {
  LANGUAGE = "language",
  FRAMEWORK = "framework",
  TOOLS = "tools",
  DATABASE = "database",
  CONCEPT = "concept",
  DESIGN = "design",
  DEVOPS = "devops",
  LIBRARY = "library",
}

export interface Skill {
  title: string;
  icon: string;
  types: SkillType[];
  categories: SkillCategory[];
}

export type SkillSkeleton = {
  contentTypeId: "skills";
  fields: {
    title: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    types: EntryFieldTypes.Text[];
    categories: EntryFieldTypes.Text[];
  };
};

export function isValidSkillType(value: string): value is SkillType {
  return Object.values(SkillType).includes(value as SkillType);
}

export function isValidSkillCategory(value: string): value is SkillCategory {
  return Object.values(SkillCategory).includes(value as SkillCategory);
}
