import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useForm } from "react-hook-form";
import type {
  AuthIdentifierFormValues,
  AuthIdentifierStepProps,
} from "../types/auth.types";

const AuthIdentifierStep = ({
  title = "Sign In To Uplift",
  subtitle = "Let's personalize your fitness with AI",
  primaryActionLabel = "Sign In",
  isLoading = false,
  errorMessage,
  onSubmit,
  onForgotPassword,
  onSwitchAuthMode,
}: AuthIdentifierStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthIdentifierFormValues>({
    mode: "onChange",
    defaultValues: {
      identifier: "",
      password: "",
    },
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
        sx={{
          width: "100%",
          maxWidth: { xs: 360, sm: 400 },
          p: 3,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3}>
          {/* Logo */}
          <Box display="flex" justifyContent="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                bgcolor: "secondary.main",
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                placeholder="Email address"
                fullWidth
                {...register("identifier", { required: true })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Password"
                type="password"
                fullWidth
                {...register("password", { required: true })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small">
                        <VisibilityOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {errorMessage && (
                <Typography color="error" variant="body2">
                  {errorMessage}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                disabled={!isValid || isLoading}
                variant="contained"
                sx={{ height: 52, borderRadius: 3 }}
              >
                {isLoading ? "Signing in..." : primaryActionLabel}
              </Button>
            </Stack>
          </form>

          <Divider>or</Divider>

          <Stack direction="row" justifyContent="center" spacing={2}>
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

          <Stack textAlign="center" spacing={1}>
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
