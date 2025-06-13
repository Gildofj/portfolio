import { ReactNode } from "react";

import LocaleProvider from "./LocaleContext";
import PortfolioThemeProvider from "./ThemeContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <LocaleProvider>
      <PortfolioThemeProvider>{children}</PortfolioThemeProvider>
    </LocaleProvider>
  );
}
