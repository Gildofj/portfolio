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
}