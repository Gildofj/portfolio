import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<MetadataRoute.Manifest> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "manifest" });

  return {
    name: t("name"),
    short_name: "gildofj.dev",
    start_url: `/${lang}/`,
    display: "standalone",
    background_color: "hsl(270 100% 68%)",
    theme_color: "hsl(270 100% 68%)",
    description: t("description"),
  };
}
