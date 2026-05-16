import { Qualification, QualificationsSkeleton } from "@/entities/qualification/model/qualification";
import { contentfulServiceFactory } from "@/services/contentful";
import { getTranslations } from "next-intl/server";

const contentfulService = contentfulServiceFactory();

function toDate(value: unknown): Date | null {
  if (!value) return null;
  const date = new Date(value as string);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function getQualifications(locale: string, type: number): Promise<Qualification[]> {
  const [data, t] = await Promise.all([
    contentfulService.getEntries<QualificationsSkeleton>({
      content_type: "qualifications",
      locale: locale,
    }),
    getTranslations({ locale, namespace: "qualification" }),
  ]);

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  });
  const presentLabel = t("present");

  const qualificationData = data.items
    .filter((item) => item.fields.type === type)
    .sort((a, b) => {
      const aEnd = toDate(a.fields.endDate)?.getTime() ?? Infinity;
      const bEnd = toDate(b.fields.endDate)?.getTime() ?? Infinity;
      return bEnd - aEnd;
    })
    .flatMap(({ fields }) => {
      const startDate = toDate(fields.startDate);
      const endDate = toDate(fields.endDate);

      return {
        title: fields.title,
        organization: fields.organization,
        country: fields.country,
        state: fields.state,
        city: fields.city,
        startDate: startDate ? dateFormatter.format(startDate) : "",
        endDate: endDate ? dateFormatter.format(endDate) : presentLabel,
        workModel: fields.workModel,
        description: fields.description,
        certificateId: fields.certificateId,
        certificateUrl: fields.certificateUrl,
        workedAppUrl: fields.workedAppUrl,
        workedAppName: fields.workedAppName,
      };
    });

  return qualificationData as Qualification[];
}
