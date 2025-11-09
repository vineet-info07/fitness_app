import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows?: { light: string; dark: string; primary: string };
  }
  interface ThemeOptions {
    customShadows?: {
      light: string;
      dark: string;
      primary: string;
    };
  }
}
