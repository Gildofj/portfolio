import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#18181b",

    text: "#d4d4d8",

    black: "#000000",
    white: "#ffffff",

    shape: "#2A2634",

    purple_500: "#A855F7",
    purple_800: "#6B21A8",

    zinc_300: "#d4d4d8",
    zinc_500: "#71717A",
    zinc_700: "#3f3f46",
    zinc_800: "#27272a",
    zinc_900: "#18181b",

    primary: "#A855F7",
    success: "#34D399",
    alert: "#F87171",

    transparent: "#00000000",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "1.875rem",
    xxxxl: "2.25rem",
    xxxxxl: "3rem",
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
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
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  vertical-align: baseline;
  scroll-behavior: smooth;
}

::before,
::after {
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.DEFAULT', currentColor);
}

body {
  width: 100%;
  font-family: --apple-system, BlinkMacSystemFont, Inter, "Segoe UI", Helvetiva, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --webkit-font-smoothing: antialiased;
  font-size: ${({ theme: { fontSize } }) => fontSize.base};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.base};
  text-rendering: optmizeLegibility;
  overflow-wrap: break-word;
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.text};

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

#root {
 width: 100%;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

a {
  color: rgb(212, 212, 216);
  text-decoration: none;
}

.sr-only {
	position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
`;

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
