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

declare module "@mui/material/styles" {
  interface Palette {
    accent: {
      lime: string;
      purple: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      lime: string;
      purple: string;
    };
  }
}
