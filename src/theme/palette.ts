import type { ThemeOptions } from "@mui/material/styles";

export const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#1976d2",
    light: "#63a4ff",
    dark: "004ba0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ff4081",
    light: "ff79b0",
    dark: "c60055",
    contrastText: "#fff",
  },
  success: { main: "#4caf50" },
  error: { main: "#f44336" },
  warning: { main: "#ff9800" },
  background: {
    default: `f9f9f9`,
    paper: "#fff",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
  },
};
