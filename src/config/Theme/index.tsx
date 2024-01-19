import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { coreTheme, coreColors } from "./core";

const lightTheme = {
  colors: {
    background: "##faf5ff",

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

export const Theme = ({ theme, children }: any) => (
  <ThemeProvider theme={theme !== "light" ? darkTheme : lightTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
