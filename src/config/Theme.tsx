import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background_900: '#12131F',
    background_800: '#18181B',

    text: '#E6E6FA',

    caption_500: '#71717A',
    caption_400: '#A1A1AA',
    caption_300: '#D4D4D8',

    shape: '#2A2634',

    primary: '#800080',
    success: '#34D399',
    alert: '#F87171',

    purple: "#800080",
    purple_200: "#D8BFD8",
    purple_300: "#800080",
    purple_400: "#662d91",
    purple_500: "#720e9e",
    purple_600: "#4B0082",
    purple_700: "#452c63",
    purple_800: "#33006F",
    purple_900: "#1d1160",

    violet: "#EE82EE",
    pink: "#DDA0DD",
    transparent: "#00000000"
  },
  fonts: ["Inter", "Roboto", "sans-serif"],
  fontSizes: {
    small: "0.75em",
    medium: "1em",
    large: "2em"
  }
}

const GlobalStyle = createGlobalStyle`
  * {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-family: "Inter", "Roboto", sans-serif !important;
	font: inherit;
  color: #E6E6FA;
	vertical-align: baseline;
  scroll-behavior: smooth;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: #12131F;
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
  color: #E6E6FA;
  text-decoration: none;
}
`;

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
