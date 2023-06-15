import { useEffect, useState } from "react";

import moment from "moment";
import { contentfulClient } from "../../config/Contentful";
import { Portfolio, PortfolioSkeleton } from "./types";

async function getPortfolios(active: boolean, setPortfolios: (lista: Portfolio[]) => void) {
  if (!active) return;

  const data = await contentfulClient.getEntries<PortfolioSkeleton>({ content_type: "portfolios" });

  const portfolioData = await Promise.all(
    data.items
      .sort((a, b) => moment(moment(a.sys.createdAt)).diff(moment(b.sys.createdAt)))
      .flatMap(async ({ fields }) => {
        const image = await contentfulClient.getAsset(fields.image.sys.id);

        return {
          title: fields.title,
          image: image.fields.file?.url || "",
          url: fields.url,
        }
      })
  );

  setPortfolios(portfolioData as Portfolio[]);
}

export const usePortfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    let active = true
    getPortfolios(active, setPortfolios)
    return () => { active = false }
  }, []);

  return { portfolios }
}
