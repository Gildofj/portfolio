import { CreateClientParams, createClient } from "contentful";

export const contentfulClient = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
} as CreateClientParams);
