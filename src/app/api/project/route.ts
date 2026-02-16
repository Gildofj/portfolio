import { ProjectSkeleton, ProjectType } from "@/models/project";
import { contentfulServiceFactory } from "@/services/contentful";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

const contentfulService = contentfulServiceFactory();

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    if (params.has("locale") === false) {
      return NextResponse.json(
        { error: "Locale parameter is required" },
        { status: 400 },
      );
    }

    let typeValue: ProjectType | undefined = undefined;
    const locale = params.get("locale")!;
    const type = params.get("type");
    if (type) {
      typeValue = Number(type);
    }
    const data = await contentfulService.getEntries<ProjectSkeleton>({
      content_type: "portfolios",
      locale: locale,
    });

    const projectsData = await Promise.all(
      data.items
        .filter(({ fields }) => !type || fields.type === typeValue)
        .sort((a, b) =>
          moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt)),
        )
        .flatMap(async ({ fields }) => {
          const image = await contentfulService.getAsset(fields.image.sys.id);

          return {
            title: fields.title,
            image: image.fields.file?.url || "",
            url: fields.url,
            description: fields.description,
            type: fields.type,
          };
        }),
    );

    return NextResponse.json(projectsData);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}
