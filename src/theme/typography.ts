import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  h1: { fontSize: "2rem", fontWeight: 600, lineHeight: 1.3 },
  h2: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.4 },
  h3: { fontSize: "1.5rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
  body2: { fontSize: "0.875rem", color: "#555" },
  button: { textTransform: "none", fontWeight: 600 },
};
