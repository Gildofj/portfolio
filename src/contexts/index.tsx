import { ReactNode } from "react";

import PortfolioThemeProvider from "./ThemeContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return <PortfolioThemeProvider>{children}</PortfolioThemeProvider>;
}
