import contentful from "contentful";

export enum QualificationType {
  Education,
  Experience
}

export enum WorkModel {
  Remote,
  Hybrid,
  OnSite
}

export interface Qualification {
  title: string;
  organization: string;
  country: string;
  state: string;
  city: string;
  startDate: string;
  endDate: string;
  workModel: WorkModel;
  description: string;
  certificateId?: string;
  certificateUrl?: string;
}

export interface QualificationsSkeleton {
  contentTypeId: "qualifications",
  fields: {
    title: contentful.EntryFieldTypes.Text,
    organization: contentful.EntryFieldTypes.Text,
    country: contentful.EntryFieldTypes.Text,
    state: contentful.EntryFieldTypes.Text,
    city: contentful.EntryFieldTypes.Text,
    startDate: contentful.EntryFieldTypes.Date,
    endDate: contentful.EntryFieldTypes.Date,
    workModel: contentful.EntryFieldTypes.Number,
    type: contentful.EntryFieldTypes.Number,
    description: contentful.EntryFieldTypes.Text,
    certificateId: contentful.EntryFieldTypes.Text,
    certificateUrl: contentful.EntryFieldTypes.Text
  }
}
