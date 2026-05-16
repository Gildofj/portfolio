import { Project, ProjectSkeleton, ProjectType } from "@/entities/project/model/project";
import { contentfulServiceFactory } from "@/services/contentful";

const contentfulService = contentfulServiceFactory();

export async function getProjects(locale: string, type?: ProjectType): Promise<Project[]> {
  const data = await contentfulService.getEntries<ProjectSkeleton>({
    content_type: "portfolios",
    locale: locale,
  });

  const projectsData = await Promise.all(
    data.items
      .filter(({ fields }) => type === undefined || fields.type === type)
      .sort(
        (a, b) =>
          new Date(a.sys.createdAt).getTime() -
          new Date(b.sys.createdAt).getTime(),
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

  return projectsData;
}
