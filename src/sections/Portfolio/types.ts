import { EntryFieldTypes } from "contentful";

export enum ProjectType {
  Personal,
  Colaborations,
}

export interface Portfolio {
  title: string;
  image: string;
  url: string;
  description: string;
  type: ProjectType;
}

export type PortfolioSkeleton = {
  contentTypeId: "portfolios";
  fields: {
    title: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    url: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    type: EntryFieldTypes.Number;
  };
};
