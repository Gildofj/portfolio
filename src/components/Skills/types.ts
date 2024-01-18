import { EntryFieldTypes } from "contentful";

export enum SkillType {
  BACKEND,
  FRONTEND,
  MOBILE,
}

export interface Skill {
  title: string;
  icon: string;
  type: SkillType;
}

export type SkillSkeleton = {
  contentTypeId: "skills";
  fields: {
    title: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    type: EntryFieldTypes.Number;
  };
};
