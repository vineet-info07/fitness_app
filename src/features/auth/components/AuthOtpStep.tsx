import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import type { AuthOtpStepProps } from "../types/auth.types";

const OTP_LENGTH = 6;

const AuthOtpStep = ({
  title = "Verify your account",
  subtitle = "We’ve sent a 6-digit code to",
  identifier,
  primaryActionLabel = "Verify",
  onSubmit,
  isLoading = false,
  errorMessage,
}: AuthOtpStepProps) => {
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // 👉 Move focus
  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  // 👉 Handle typing
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  // 👉 Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  // 👉 Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pasted)) return;

    const pastedOtp = pasted.split("");
    setOtp(pastedOtp);

    focusInput(pastedOtp.length - 1);
    e.preventDefault();
  };

  const combinedOtp = otp.join("");
  const isComplete = combinedOtp.length === OTP_LENGTH;

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
          maxWidth: isTabletUp ? 420 : 360,
          borderRadius: 4,
          p: isTabletUp ? 4 : 3,
        }}
      >
        <Stack spacing={4} alignItems="center">
          {/* Visual */}
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              bgcolor: "secondary.light",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🔐
          </Box>

          {/* Header */}
          <Stack spacing={1} textAlign="center">
            <Typography variant={isTabletUp ? "h5" : "h6"} fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {identifier}
            </Typography>
          </Stack>

          {/* OTP Inputs */}
          <Stack direction="row" spacing={1.5}>
            {otp.map((value, index) => (
              <TextField
                key={index}
                value={value}
                inputRef={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                inputProps={{
                  maxLength: 1,
                  inputMode: "numeric",
                  style: {
                    textAlign: "center",
                    fontSize: isTabletUp ? 22 : 18,
                    fontWeight: 600,
                  },
                }}
                sx={{ width: isTabletUp ? 56 : 48 }}
              />
            ))}
          </Stack>

          {/* Error */}
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}

          {/* CTA */}
          <Button
            fullWidth
            variant="contained"
            disabled={!isComplete || isLoading}
            onClick={() => onSubmit?.({ otp: combinedOtp })}
            sx={{
              height: isTabletUp ? 56 : 52,
              borderRadius: 3,
              bgcolor: "text.primary",
              "&:hover": { bgcolor: "text.primary" },
            }}
          >
            {isLoading ? "Verifying..." : primaryActionLabel}
          </Button>

          <Typography
            variant="body2"
            color="primary.main"
            sx={{ cursor: "pointer" }}
          >
            Resend Code
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AuthOtpStep;
