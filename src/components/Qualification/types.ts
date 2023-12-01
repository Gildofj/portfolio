import { EntryFieldTypes } from "contentful";

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
  workedAppName?: string;
  workedAppUrl?: string;
}

export type QualificationsSkeleton = {
  contentTypeId: "qualifications",
  fields: {
    title: EntryFieldTypes.Text,
    organization: EntryFieldTypes.Text,
    country: EntryFieldTypes.Text,
    state: EntryFieldTypes.Text,
    city: EntryFieldTypes.Text,
    startDate: EntryFieldTypes.Date,
    endDate: EntryFieldTypes.Date,
    workModel: EntryFieldTypes.Number,
    type: EntryFieldTypes.Number,
    description: EntryFieldTypes.Text,
    certificateId: EntryFieldTypes.Text,
    certificateUrl: EntryFieldTypes.Text,
    workedAppName: EntryFieldTypes.Text,
    workedAppUrl: EntryFieldTypes.Text
  }
}
