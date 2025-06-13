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
      purple_400: string;
      purple_500: string;
      purple_600: string;
      purple_700: string;
      purple_800: string;
      purple_900: string;
      purple_950: string;

      zinc_50: string;
      zinc_100: string;
      zinc_200: string;
      zinc_300: string;
      zinc_400: string;
      zinc_500: string;
      zinc_600: string;
      zinc_700: string;
      zinc_800: string;
      zinc_900: string;
      zinc_950: string;

      primary: string;
      success: string;
      alert: string;

      transparent: string;

      text: string;
      background: string;

      skills: {
        language: string;
        framework: string;
        tools: string;
        database: string;
        concept: string;
        mobile: string;
        design: string;
        devops: string;
        library: string;
      };
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
