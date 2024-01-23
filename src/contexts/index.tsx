import { ReactNode } from "react";
import ThemeProvider from "./ThemeContext";
import LocaleProvider from "./IntlContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <LocaleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  );
}
