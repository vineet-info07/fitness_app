import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { AuthIdentifierStepProps } from "../types/auth.types";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const AuthIdentifierStep = ({
  title = "Sign In To Uplift",
  subtitle = "Let's personalize your fitness with AI",
  primaryActionLabel = "Sign In",
  onSubmit,
  onForgotPassword,
  onSwitchAuthMode,
  errorMessage,
}: AuthIdentifierStepProps) => {
  return (
    <Container maxWidth="sm">
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={2}
      >
        <Paper
          elevation={0}
          sx={{ width: "100%", maxWidth: 400, borderRadius: 4, p: 3 }}
        >
          <Stack spacing={3}>
            {/*Logo */}
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

            <Stack spacing={1} textAlign="center">
              <Typography variant="h5" fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body2" fontWeight={600}>
                Email Address
              </Typography>
              <TextField
                placeholder="Enter your email"
                fullWidth
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
                height: 52,
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

            {/* Footer Links */}
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
    </Container>
  );
};

export default AuthIdentifierStep;
