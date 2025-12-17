export type AuthIdentifierFormValues = {
  identifier: string;
  password: string;
};

export type AuthOtpFormValues = {
  otp: string;
};

export type AuthIdentifierStepProps = {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  isLoading?: boolean;
  errorMessage?: string | null;
  onSubmit: (data: AuthIdentifierFormValues) => void;
  onForgotPassword?: () => void;
  onSwitchAuthMode?: () => void;
};
export type AuthOtpStepProps = {
  isLoading?: boolean;
  errorMessage?: string | null;
  onSubmit: (data: AuthOtpFormValues) => void;
};

export interface AuthSuccessStepProps {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  onContinue?: () => void;
}

export type AuthErrorMessageProps = {
  message?: string;
  onRetry: () => void; // ✅ REQUIRED
};
