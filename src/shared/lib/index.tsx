import { ReactNode } from "react";
import { LazyMotion, domMax } from "motion/react";

import PortfolioThemeProvider from "./ThemeContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <LazyMotion features={domMax} strict>
      <PortfolioThemeProvider>{children}</PortfolioThemeProvider>
    </LazyMotion>
  );
}
