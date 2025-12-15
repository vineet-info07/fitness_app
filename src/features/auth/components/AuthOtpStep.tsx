import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import type { AuthOtpStepProps } from "../types/auth.types";

const OTP_LENGTH = 6;

const AuthOtpStep = ({
  title = "Enter Verification Code",
  subtitle = "We’ve sent a 6-digit code to your email",
  primaryActionLabel = "Verify",
  maskedIdentifier = "el*****@gmail.com",
  onSubmit,
  onBack,
  onResend,
}: AuthOtpStepProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box minHeight="100vh" display="flex">
      {/* Desktop Branding */}
      {isDesktop && (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={8}
          sx={{ bgcolor: "background.default" }}
        >
          <Stack spacing={3} maxWidth={420}>
            <Typography variant="h3" fontWeight={800}>
              Verify your identity
            </Typography>

            <Typography color="text.secondary" fontSize={16}>
              This extra step helps us keep your account secure.
            </Typography>
          </Stack>
        </Box>
      )}

      {/* OTP Card */}
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
            p: { xs: 2.5, sm: 3.5, md: 4 },
          }}
        >
          <Stack spacing={{ xs: 2.5, sm: 3 }}>
            {/* Back */}
            <IconButton onClick={onBack} sx={{ alignSelf: "flex-start" }}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Header */}
            <Stack spacing={1}>
              <Typography variant={isDesktop ? "h4" : "h5"} fontWeight={700}>
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {subtitle}
                <br />
                <strong>{maskedIdentifier}</strong>
              </Typography>
            </Stack>

            {/* OTP Inputs */}
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 1.5 }}
              justifyContent="center"
            >
              {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                <TextField
                  key={index}
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center", fontSize: 18 },
                  }}
                  sx={{
                    width: { xs: 44, sm: 52 },
                  }}
                />
              ))}
            </Stack>

            {/* Timer */}
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Didn’t receive the code?{" "}
              <Typography
                component="span"
                color="primary.main"
                fontWeight={600}
                sx={{ cursor: "pointer" }}
                onClick={onResend}
              >
                Resend
              </Typography>
            </Typography>

            {/* CTA */}
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={onSubmit}
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

export default AuthOtpStep;
