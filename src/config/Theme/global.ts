import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
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
    text-rendering: optimizeLegibility;
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

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme: { colors } }) => colors.text};
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
