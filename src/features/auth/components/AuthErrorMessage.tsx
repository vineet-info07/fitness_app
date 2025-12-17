import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import type { AuthErrorMessageProps } from "../types/auth.types";

const AuthErrorMessage = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}: AuthErrorMessageProps) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Paper sx={{ width: "100%", maxWidth: 360, p: 3, borderRadius: 4 }}>
        <Stack spacing={3} textAlign="center">
          <Typography variant="h6" fontWeight={700} color="error">
            Oops!
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{ height: 52, borderRadius: 3 }}
            onClick={onRetry}
          >
            Try Again
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AuthErrorMessage;
