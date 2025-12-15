export type AuthIdentifierStepProps = {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  onSubmit?: () => void;
  onForgotPassword?: () => void;
  onSwitchAuthMode?: () => void;
  errorMessage?: string;
};
