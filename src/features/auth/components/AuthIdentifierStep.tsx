import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  authIdentifierSchema,
  type AuthIdentifierFormValues,
} from "../utils/auth.validators";
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
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktopUp = useMediaQuery(theme.breakpoints.up("md"));

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AuthIdentifierFormValues>({
    resolver: zodResolver(authIdentifierSchema),
    mode: "onChange",
  });

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: isDesktopUp ? 460 : 400,
          borderRadius: 4,
          p: isDesktopUp ? 4 : 3,
        }}
      >
        <Stack spacing={3}>
          {/* Logo */}
          <Box display="flex" justifyContent="center">
            <Box
              sx={{
                width: isTabletUp ? 72 : 64,
                height: isTabletUp ? 72 : 64,
                borderRadius: 3,
                bgcolor: "secondary.light",
                color: "#fff",
                fontWeight: 700,
                fontSize: isTabletUp ? 32 : 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              U
            </Box>
          </Box>

          {/* Header */}
          <Stack spacing={1} textAlign="center">
            <Typography variant={isTabletUp ? "h4" : "h5"} fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Stack>

          {/* Identifier */}
          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={600}>
              Email or Phone
            </Typography>
            <TextField
              placeholder="Enter your email or phone"
              fullWidth
              error={!!errors.identifier}
              helperText={errors.identifier?.message}
              {...register("identifier")}
              InputProps={{
                startAdornment: (
                  <EmailOutlinedIcon sx={{ mr: 1, color: "text.secondary" }} />
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
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
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

          {/* CTA */}
          <Button
            fullWidth
            size="large"
            variant="contained"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
            sx={{
              height: isTabletUp ? 56 : 52,
              borderRadius: 3,
              bgcolor: "text.primary",
              "&:hover": { bgcolor: "text.primary" },
            }}
          >
            {primaryActionLabel}
          </Button>

          {/* Social */}
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
  );
};

export default AuthIdentifierStep;
