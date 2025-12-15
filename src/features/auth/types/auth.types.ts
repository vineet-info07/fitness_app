export type AuthIdentifierStepProps = {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  onSubmit?: () => void;
  onForgotPassword?: () => void;
  onSwitchAuthMode?: () => void;
  // errorMessage?: string;
};

export interface AuthOtpStepProps {
  title?: string;
  subtitle?: string;
  maskedIdentifier?: string;
  primaryActionLabel?: string;

  onSubmit?: () => void;
  onBack?: () => void;
  onResend?: () => void;
}

export interface AuthSuccessStepProps {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  onContinue?: () => void;
}

export interface AuthErrorMessageProps {
  title?: string;
  message?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  variant?: "inline" | "page";
}
