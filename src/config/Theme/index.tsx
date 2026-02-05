import { ReactNode } from "react";

import { usePortfolioTheme } from "../../contexts/ThemeContext";

type ThemeProps = {
  children: ReactNode;
};

export const Theme = ({ children }: ThemeProps) => {
  usePortfolioTheme(); /* ensures theme is in context so dark class is synced */
  return <>{children}</>;
};
