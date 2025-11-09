import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: "10px 20px",
        fontWeight: 600,
        boxShadow: "none",
        "&:hover": { boxShadow: "0px 2px 8px rgba(76,175,80,0.25)" },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        boxShadow: "0px 2px 12px rgba(0,0,0, 0.05)",
      },
    },
  },
};
