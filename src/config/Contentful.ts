import { CreateClientParams, createClient } from "contentful";

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

if (!accessToken || !space) {
  throw new Error(
    "Contentful access token and space ID must be provided in environment variables.",
  );
}

export const contentfulClient = createClient({
  accessToken,
  space,
} as CreateClientParams);
