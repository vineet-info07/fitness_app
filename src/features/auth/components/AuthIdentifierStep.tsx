import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import type { AuthIdentifierStepProps } from "../types/auth.types";

const AuthIdentifierStep = ({
  title = "Sign In To Uplift",
  subtitle = "Let's personalize your fitness with AI",
  primaryActionLabel = "Sign In",
  onSubmit,
  onForgotPassword,
  onSwitchAuthMode,
}: AuthIdentifierStepProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box minHeight="100vh" display="flex">
      {/* Desktop Branding Panel */}
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
              Train smarter.
              <br />
              Live stronger.
            </Typography>

            <Typography color="text.secondary" fontSize={16}>
              AI-powered workouts, nutrition, and fitness insights personalized
              just for you.
            </Typography>
          </Stack>
        </Box>
      )}

      {/* Auth Form */}
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
            {/* Logo */}
            <Box display="flex" justifyContent="center">
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 3,
                  bgcolor: "secondary.light",
                  color: "#fff",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
              >
                U
              </Box>
            </Box>

            {/* Title */}
            <Stack spacing={1} textAlign="center">
              <Typography variant={isDesktop ? "h4" : "h5"} fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            </Stack>

            {/* Email */}
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight={600}>
                Email Address
              </Typography>
              <TextField
                placeholder="Enter your email"
                fullWidth
                size={isDesktop ? "medium" : "small"}
                InputProps={{
                  startAdornment: (
                    <EmailOutlinedIcon
                      sx={{ mr: 1, color: "text.secondary" }}
                    />
                  ),
                }}
              />
            </Stack>

            {/* Password */}
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight={600}>
                Password
              </Typography>
              <TextField
                placeholder="Enter password"
                type="password"
                fullWidth
                size={isDesktop ? "medium" : "small"}
                InputProps={{
                  startAdornment: (
                    <LockOutlinedIcon sx={{ mr: 1, color: "text.secondary" }} />
                  ),
                  endAdornment: (
                    <IconButton size="small">
                      <VisibilityOutlinedIcon />
                    </IconButton>
                  ),
                }}
              />
            </Stack>

            {/* Primary CTA */}
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

            {/* Social Login */}
            <Stack spacing={2}>
              <Divider>or</Divider>
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>

            {/* Footer */}
            <Stack spacing={1} textAlign="center">
              <Typography variant="body2">
                Don’t have an account?{" "}
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={onSwitchAuthMode}
                >
                  Sign Up
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                color="primary.main"
                fontWeight={600}
                sx={{ cursor: "pointer" }}
                onClick={onForgotPassword}
              >
                Forgot Password
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default AuthIdentifierStep;
