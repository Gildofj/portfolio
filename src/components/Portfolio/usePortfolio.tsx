import moment from "moment";
import { useEffect, useState } from "react";

import { contentfulClient } from "../../config/Contentful";
import { useLocale } from "../../contexts/LocaleContext";

import { Portfolio, PortfolioSkeleton } from "./types";

async function getPortfolios(
  active: boolean,
  locale: string,
  setPortfolios: (lista: Portfolio[]) => void
) {
  if (!active) return;

  const data = await contentfulClient.getEntries<PortfolioSkeleton>({
    content_type: "portfolios",
    locale: locale,
  });

  const portfolioData = await Promise.all(
    data.items
      .sort((a, b) =>
        moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt))
      )
      .flatMap(async ({ fields }) => {
        const image = await contentfulClient.getAsset(fields.image.sys.id);

        return {
          title: fields.title,
          image: image.fields.file?.url || "",
          url: fields.url,
          description: fields.description,
          type: fields.type,
        };
      })
  );

  setPortfolios(portfolioData as Portfolio[]);
}

export const usePortfolio = () => {
  const { locale } = useLocale();
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    let active = true;
    getPortfolios(active, locale, setPortfolios);
    return () => {
      active = false;
    };
  }, [locale]);

  return { portfolios };
};
