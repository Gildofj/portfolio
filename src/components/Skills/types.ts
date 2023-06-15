import { EntryFieldTypes } from "contentful";

export enum Expertise {
  BASIC,
  INTERMEDIATE,
  ADVANCED
}

export enum SkillType {
  BACKEND,
  FRONTEND,
  MOBILE
}

export interface Skill {
  title: string;
  expertise: Expertise;
  type: SkillType;
}

export type SkillSkeleton = {
  contentTypeId: "skills",
  fields: {
    title: EntryFieldTypes.Text,
    expertise: EntryFieldTypes.Number,
    type: EntryFieldTypes.Number
  }
}
