import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#18181b",

    text: "#E6E6FA",

    caption_500: "#71717A",
    caption_400: "#A1A1AA",
    caption_300: "#D4D4D8",

    shape: "#2A2634",

    primary: "#800080",
    success: "#34D399",
    alert: "#F87171",

    purple: "#800080",
    purple_200: "#D8BFD8",
    purple_300: "#800080",
    purple_400: "#662d91",
    purple_500: "#720e9e",
    purple_600: "#560080",
    purple_700: "#4A2F7C",
    purple_800: "#33006F",
    purple_900: "#2C0080",

    violet: "#EE82EE",
    pink: "#DDA0DD",
    transparent: "#00000000",
  },
  fonts: [
    "--apple-system",
    "BlinkMacSystemFont",
    "Inter",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.875rem",
    xxl: "1.5rem",
    xxxl: "1.875",
    xxxxl: "2.25rem",
    xxxxxl: "3rem",
  },
  lineHeights: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.75rem",
    xl: "1.75rem",
    xxl: "2rem",
    xxxl: "2.25rem",
    xxxxl: "2.5rem",
    max: "1",
  },
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  scroll-behavior: smooth;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  font-family: --apple-system, BlinkMacSystemFont, Inter, "Segoe UI", Helvetiva, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --webkit-font-smoothing: antialiased;
  text-rendering: optmizeLegibility;
  overflow-wrap: break-word;
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  color: rgb(212, 212, 216);
  text-decoration: none;
}
`;

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
