import type { ThemeOptions } from "@mui/material/styles";

export const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#2E7D32", // Fitness green
    light: "#60AD5E",
    dark: "#005005",
    contrastText: "#FFFFFF",
  },

  secondary: {
    main: "#FF6F00", // Energy orange
    light: "#FFA040",
    dark: "#C43E00",
    contrastText: "#FFFFFF",
  },

  success: {
    main: "#4CAF50",
  },

  error: {
    main: "#E53935",
  },

  warning: {
    main: "#FB8C00",
  },

  info: {
    main: "#0288D1",
  },

  background: {
    default: "#F9FAFB", // Soft app background
    paper: "#FFFFFF",
  },

  text: {
    primary: "#1F2937", // Dark gray (better than pure black)
    secondary: "#6B7280",
    disabled: "#9CA3AF",
  },

  divider: "#E5E7EB",

  accent: {
    lime: "#AEEA00",
    purple: "#7C4DFF",
  },
};
