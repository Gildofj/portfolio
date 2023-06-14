import { useEffect, useState } from "react";

import { contentfulClient } from "../../config/Contentful";
import { Portfolio, PortfolioSkeleton } from "./types";

async function getPortfolios(active: boolean, setPortfolios: (lista: Portfolio[]) => void) {
  if (!active) return;

  const data = await contentfulClient.getEntries<PortfolioSkeleton>();

  const portfolioData = data.items
    .flatMap(({ fields }) => ({
      title: fields.title,
      image: fields.image as unknown as String,
      url: fields.url,
    }));

  setPortfolios(portfolioData as Portfolio[]);
}

export const usePortfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    let active = true
    getPortfolios(active, setPortfolios)
    return () => { active = false }
  });

  return { portfolios }
}
