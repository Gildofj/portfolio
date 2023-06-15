import { useEffect, useState } from "react";
import moment from "moment";

import { contentfulClient } from "../../config/Contentful";
import { Qualification, QualificationType, QualificationsSkeleton } from "./types";

async function getQualifications(type: QualificationType, active: boolean, setQualifications: (lista: Qualification[]) => void) {
  if (!active) return;

  const data = await contentfulClient.getEntries<QualificationsSkeleton>({ content_type: "qualifications" });

  const qualificationData = data.items
    .filter(item => item.fields.type === type)
    .sort((a, b) => moment(moment(b.fields.endDate)).diff(moment(a.fields.endDate)))
    .flatMap(({ fields }) => ({
      title: fields.title,
      organization: fields.organization,
      country: fields.country,
      state: fields.state,
      city: fields.city,
      startDate: moment(fields.startDate).format("MMMM YYYY"),
      endDate: moment(fields.endDate).format("MMMM YYYY"),
      workModel: fields.workModel,
      description: fields.description,
      certificateId: fields.certificateId,
      certificateUrl: fields.certificateUrl,
    }))

  setQualifications(qualificationData as Qualification[]);
}

export const useQualification = (type: QualificationType) => {
  const [qualifications, setQualifications] = useState<Qualification[]>();

  useEffect(() => {
    let active = true
    getQualifications(type, active, setQualifications)
    return () => { active = false }
  }, []);

  useEffect(() => {
    let active = true
    getQualifications(type, active, setQualifications)
    return () => { active = false }
  }, [type]);

  return { qualifications }
}
