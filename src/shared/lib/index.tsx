import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "motion/react";

import PortfolioThemeProvider from "./ThemeContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      <PortfolioThemeProvider>{children}</PortfolioThemeProvider>
    </LazyMotion>
  );
}
