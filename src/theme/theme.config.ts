import { createTheme } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

import { palette } from "./theme.palette";
import { typography } from "./theme.typography";
import { breakpoints } from "./theme.breakpoints";
import { components } from "./theme.components";

const baseThemeOptions: ThemeOptions = {
  palette,
  typography,
  breakpoints,
  components,

  // ✅ Custom extension
  customShadows: {
    light: "0px 1px 3px rgba(0,0,0,0.12)",
    dark: "0px 2px 6px rgba(0,0,0,0.2)",
    primary: "0px 2px 8px rgba(63,81,181,0.3)",
  },
};

export const theme = createTheme(baseThemeOptions);
