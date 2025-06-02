import moment from "moment";
import { useEffect, useState } from "react";

import { contentfulClient } from "../../config/Contentful";
import { useLocale } from "../../contexts/LocaleContext";

import {
  Qualification,
  QualificationType,
  QualificationsSkeleton,
} from "./types";

async function getQualifications(
  type: QualificationType,
  active: boolean,
  locale: string,
  setQualifications: (lista: Qualification[]) => void
) {
  if (!active) return;

  const data = await contentfulClient.getEntries<QualificationsSkeleton>({
    content_type: "qualifications",
    locale: locale,
  });

  const qualificationData = data.items
    .filter(item => item.fields.type === type)
    .sort((a, b) =>
      moment(moment(b.fields.endDate)).diff(moment(a.fields.endDate))
    )
    .flatMap(({ fields }) => ({
      title: fields.title,
      organization: fields.organization,
      country: fields.country,
      state: fields.state,
      city: fields.city,
      startDate: moment(fields.startDate).format("MMM YYYY"),
      endDate: moment(fields.endDate).format("MMM YYYY"),
      workModel: fields.workModel,
      description: fields.description,
      certificateId: fields.certificateId,
      certificateUrl: fields.certificateUrl,
      workedAppUrl: fields.workedAppUrl,
      workedAppName: fields.workedAppName,
    }));

  setQualifications(qualificationData as Qualification[]);
}

export const useQualification = (type: QualificationType) => {
  const { locale } = useLocale();
  const [qualifications, setQualifications] = useState<Qualification[]>();

  useEffect(() => {
    let active = true;
    getQualifications(type, active, locale, setQualifications);
    return () => {
      active = false;
    };
  }, [type, locale]);

  return { qualifications };
};
