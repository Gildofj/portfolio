import { Qualification, QualificationsSkeleton } from "@/entities/qualification/model/qualification";
import { contentfulServiceFactory } from "@/services/contentful";
import { getTranslations } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";

const contentfulService = contentfulServiceFactory();

function toDate(value: unknown): Date | null {
  if (!value) return null;
  const date = new Date(value as string);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    if (params.has("locale") === false || params.has("type") === false) {
      return NextResponse.json(
        { error: "The params locale and type are required" },
        { status: 400 },
      );
    }

    const locale = params.get("locale")!;
    const type = params.get("type")!;
    const typeValue = Number(type);
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
      .filter((item) => item.fields.type === typeValue)
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

    return NextResponse.json(qualificationData as Qualification[]);
  } catch (error) {
    console.error("Error fetching qualifications:", error);
    return NextResponse.json(
      { error: "Failed to fetch qualifications" },
      { status: 500 },
    );
  }
}
