import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { AuthOtpStepProps } from "../types/auth.types";

const OTP_LENGTH = 6;
const RESEND_TIME = 30;

const AuthOtpStep = ({
  identifier,
  onSubmit,
  onResend,
  isLoading = false,
  errorMessage,
}: AuthOtpStepProps) => {
  const theme = useTheme();
  const isTabletUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(RESEND_TIME);
  const [shake, setShake] = useState(false);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  /* ---------------- Timer ---------------- */
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ---------------- Shake on error ---------------- */
  useEffect(() => {
    if (errorMessage) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }, [errorMessage]);

  /* ---------------- Helpers ---------------- */
  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }

    // 🔥 Auto-submit
    if (index === OTP_LENGTH - 1 && newOtp.join("").length === OTP_LENGTH) {
      onSubmit?.({ otp: newOtp.join("") });
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }

    if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    }

    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pasted)) return;

    const pastedOtp = pasted.split("");
    setOtp(pastedOtp);

    focusInput(pastedOtp.length - 1);
    onSubmit?.({ otp: pastedOtp.join("") });

    e.preventDefault();
  };

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    setTimer(RESEND_TIME);
    focusInput(0);
    onResend?.();
  };

  /* ---------------- UI ---------------- */
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
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
          <Typography variant="h6" fontWeight={700}>
            Enter verification code
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Sent to <strong>{identifier}</strong>
          </Typography>

          {/* OTP */}
          <Stack
            direction="row"
            spacing={1.5}
            role="group"
            aria-label="One time password"
            sx={{
              animation: shake ? "shake 0.4s" : "none",
            }}
          >
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
                  pattern: "[0-9]*",
                  "aria-label": `OTP digit ${index + 1}`,
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
            <Typography color="error" variant="body2" aria-live="assertive">
              {errorMessage}
            </Typography>
          )}

          {/* CTA */}
          <Button
            fullWidth
            variant="contained"
            disabled={isLoading}
            onClick={() => onSubmit?.({ otp: otp.join("") })}
            sx={{
              height: isTabletUp ? 56 : 52,
              borderRadius: 3,
              bgcolor: "text.primary",
              "&:hover": { bgcolor: "text.primary" },
            }}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>

          {/* Resend */}
          <Typography
            variant="body2"
            color={timer === 0 ? "primary.main" : "text.secondary"}
            sx={{ cursor: timer === 0 ? "pointer" : "default" }}
            onClick={timer === 0 ? handleResend : undefined}
          >
            {timer === 0 ? "Resend Code" : `Resend in ${timer}s`}
          </Typography>
        </Stack>
      </Paper>

      {/* Shake animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            50% { transform: translateX(6px); }
            75% { transform: translateX(-6px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default AuthOtpStep;
