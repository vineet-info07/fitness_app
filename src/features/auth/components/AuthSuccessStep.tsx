import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import type { AuthSuccessStepProps } from "../types/auth.types";

const AuthSuccessStep = ({
  title = "You're all set!",
  subtitle = "Your account has been verified successfully.",
  primaryActionLabel = "Continue",
  onContinue,
}: AuthSuccessStepProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box minHeight="100vh" display="flex">
      {/* Desktop Celebration Panel */}
      {isDesktop && (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={8}
          sx={{
            bgcolor: "success.main",
            color: "#fff",
          }}
        >
          <Stack spacing={3} maxWidth={420}>
            <Typography variant="h3" fontWeight={800}>
              Welcome to Uplift 💪
            </Typography>

            <Typography fontSize={16} sx={{ opacity: 0.9 }}>
              You’re officially part of the community. Let’s build a healthier
              version of you.
            </Typography>
          </Stack>
        </Box>
      )}

      {/* Success Card */}
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
          <Stack spacing={{ xs: 2.5, sm: 3 }}>
            {/* Icon */}
            <Box display="flex" justifyContent="center">
              <CheckCircleOutlineIcon
                sx={{
                  fontSize: { xs: 72, sm: 84 },
                  color: "success.main",
                }}
              />
            </Box>

            {/* Text */}
            <Stack spacing={1}>
              <Typography variant={isDesktop ? "h4" : "h5"} fontWeight={700}>
                {title}
              </Typography>

              <Typography color="text.secondary">{subtitle}</Typography>
            </Stack>

            {/* CTA */}
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={onContinue}
              sx={{
                height: { xs: 48, sm: 52 },
                borderRadius: 3,
                bgcolor: "text.primary",
                "&:hover": { bgcolor: "text.primary" },
              }}
            >
              {primaryActionLabel}
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default AuthSuccessStep;
