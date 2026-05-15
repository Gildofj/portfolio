import { Qualification, QualificationsSkeleton } from "@/entities/qualification/model/qualification";
import { contentfulServiceFactory } from "@/services/contentful";

const contentfulService = contentfulServiceFactory();

export async function getQualifications(locale: string, type: number): Promise<Qualification[]> {
  const data = await contentfulService.getEntries<QualificationsSkeleton>({
    content_type: "qualifications",
    locale: locale,
  });

  const qualificationData = data.items
    .filter((item) => item.fields.type === type)
    .sort(
      (a, b) =>
        new Date(b.fields.endDate).getTime() -
        new Date(a.fields.endDate).getTime(),
    )
    .flatMap(({ fields }) => {
      const dateFormatter = new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
      });

      return {
        title: fields.title,
        organization: fields.organization,
        country: fields.country,
        state: fields.state,
        city: fields.city,
        startDate: dateFormatter.format(new Date(fields.startDate)),
        endDate: dateFormatter.format(new Date(fields.endDate)),
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
