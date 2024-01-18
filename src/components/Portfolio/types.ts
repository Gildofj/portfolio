import { EntryFieldTypes } from "contentful";

export interface Portfolio {
  title: string;
  image: string;
  url: string;
  description: string;
}

export type PortfolioSkeleton = {
  contentTypeId: "portfolios";
  fields: {
    title: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    url: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};
