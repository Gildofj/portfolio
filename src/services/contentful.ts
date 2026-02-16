import {
  ChainModifiers,
  ContentfulClientApi,
  CreateClientParams,
  EntriesQueries,
  EntrySkeletonType,
  createClient,
} from "contentful";

class ContentfulService {
  client: ContentfulClientApi<undefined> | undefined;

  initClient() {
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

    if (!accessToken || !space) {
      throw new Error(
        "Contentful access token and space ID must be provided in environment variables.",
      );
    }

    this.client = createClient({
      accessToken,
      space,
    } as CreateClientParams);
  }

  async getEntries<T extends EntrySkeletonType>(
    params: Record<string, string | number | boolean> &
      EntriesQueries<T, ChainModifiers>,
  ) {
    if (!this.client) {
      throw new Error("Contentful client is not initialized.");
    }

    return this.client.getEntries<T>(params);
  }

  async getAsset(id: string) {
    if (!this.client) {
      throw new Error("Contentful client is not initialized.");
    }

    return this.client.getAsset(id);
  }
}

export function contentfulServiceFactory(): ContentfulService {
  const service = new ContentfulService();
  service.initClient();
  return service;
}
