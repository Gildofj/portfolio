import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;

      purple_50: string;
      purple_100: string;
      purple_200: string;
      purple_300: string;
      purple_500: string;
      purple_800: string;

      zinc_300: string;
      zinc_500: string;
      zinc_600: string;
      zinc_700: string;
      zinc_800: string;
      zinc_900: string;

      primary: string;
      success: string;
      alert: string;

      transparent: string;

      text: string;
      background: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      xxxxxl: string;
    };
    fontWeight: {
      thin: number;
      extralight: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    lineHeight: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      max: string;
    };
  }
}
