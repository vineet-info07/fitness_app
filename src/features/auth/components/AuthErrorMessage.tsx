import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import type { AuthErrorMessageProps } from "../types/auth.types";

const AuthErrorMessage = ({
  title = "Something went wrong",
  message = "We couldn't process your request. Please try again.",
  primaryActionLabel = "Try Again",
  secondaryActionLabel = "Contact Support",
  onPrimaryAction,
  onSecondaryAction,
  variant = "inline",
}: AuthErrorMessageProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  /* ---------------- Inline Error (Mobile-first) ---------------- */
  if (variant === "inline") {
    return (
      <Alert
        severity="error"
        icon={<ErrorOutlineIcon />}
        sx={{
          borderRadius: 2,
          fontSize: { xs: 13, sm: 14 },
        }}
      >
        <AlertTitle sx={{ fontWeight: 700 }}>{title}</AlertTitle>
        {message}
      </Alert>
    );
  }

  /* ---------------- Full Page Error ---------------- */
  return (
    <Box minHeight="100vh" display="flex">
      {/* Desktop Panel */}
      {isDesktop && (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={8}
          sx={{
            bgcolor: "error.main",
            color: "#fff",
          }}
        >
          <Stack spacing={3} maxWidth={420}>
            <Typography variant="h3" fontWeight={800}>
              Oops!
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              Something didn’t go as planned. Don’t worry — it happens to the
              best of us.
            </Typography>
          </Stack>
        </Box>
      )}

      {/* Error Card */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ xs: 2, sm: 0 }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 420, md: 460 },
            borderRadius: { xs: 0, sm: 4 },
            p: { xs: 3, sm: 4 },
            textAlign: "center",
          }}
        >
          <Stack spacing={3}>
            <ErrorOutlineIcon
              sx={{
                fontSize: { xs: 64, sm: 72 },
                color: "error.main",
              }}
            />

            <Stack spacing={1}>
              <Typography variant={isDesktop ? "h4" : "h5"} fontWeight={700}>
                {title}
              </Typography>

              <Typography color="text.secondary">{message}</Typography>
            </Stack>

            <Stack spacing={1.5}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="error"
                onClick={onPrimaryAction}
                sx={{ borderRadius: 3 }}
              >
                {primaryActionLabel}
              </Button>

              {onSecondaryAction && (
                <Button fullWidth variant="text" onClick={onSecondaryAction}>
                  {secondaryActionLabel}
                </Button>
              )}
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default AuthErrorMessage;
