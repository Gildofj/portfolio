import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { useTheme } from "../../contexts/ThemeContext";

import { coreTheme, coreColors } from "./core";
import { GlobalStyle } from "./global";

const lightTheme = {
  colors: {
    background: "#faf5ff",

    text: "#18181b",

    ...coreColors,
  },
  ...coreTheme,
};

const darkTheme = {
  colors: {
    background: "#18181b",

    text: "#d4d4d8",

    ...coreColors,
  },
  ...coreTheme,
};

type ThemeProps = {
  children: ReactNode;
};

export const Theme = ({ children }: ThemeProps) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme !== "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
