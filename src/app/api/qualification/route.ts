import { Qualification, QualificationsSkeleton } from "@/models/qualification";
import { contentfulServiceFactory } from "@/services/contentful";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

const contentfulService = contentfulServiceFactory();

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
    const data = await contentfulService.getEntries<QualificationsSkeleton>({
      content_type: "qualifications",
      locale: locale,
    });

    const qualificationData = data.items
      .filter((item) => item.fields.type === typeValue)
      .sort((a, b) =>
        moment(moment(b.fields.endDate)).diff(moment(a.fields.endDate)),
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

    return NextResponse.json(qualificationData as Qualification[]);
  } catch (error) {
    console.error("Error fetching qualifications:", error);
    return NextResponse.json(
      { error: "Failed to fetch qualifications" },
      { status: 500 },
    );
  }
}
