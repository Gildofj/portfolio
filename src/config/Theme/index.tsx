import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { coreTheme, coreColors } from "./core";
import { useTheme } from "../../contexts/ThemeContext";

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

export const Theme = ({ children }: any) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme !== "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
