// features/auth/AuthPage.tsx
import AuthIdentifierStep from "./components/AuthIdentifierStep";
import AuthOtpStep from "./components/AuthOtpStep";
import AuthSuccessStep from "./components/AuthSuccessStep";
import AuthErrorMessage from "./components/AuthErrorMessage";

import { useAuthFlow } from "./hooks/useAuthFlow";
import { useLogin } from "./hooks/useLogin";
import { useVerifyOtp } from "./hooks/useVerifyOtp";
import { AuthStep } from "./types/auth.enums";

const AuthPage = () => {
  const flow = useAuthFlow();
  const login = useLogin();
  const otp = useVerifyOtp();

  if (flow.step === AuthStep.IDENTIFIER) {
    return (
      <AuthIdentifierStep
        onSubmit={async ({ identifier }) => {
          const success = await login.login(identifier);
          if (success) flow.goToOtp(identifier);
        }}
        errorMessage={login.error}
        isLoading={login.loading}
      />
    );
  }

  if (flow.step === AuthStep.OTP) {
    return (
      <AuthOtpStep
        onSubmit={async ({ otp: code }) => {
          const verified = await otp.verifyOtp(code);
          if (verified) flow.goToSuccess();
        }}
        errorMessage={otp.error}
        isLoading={otp.loading}
      />
    );
  }

  if (flow.step === AuthStep.SUCCESS) {
    return <AuthSuccessStep />;
  }

  return <AuthErrorMessage onRetry={flow.resetFlow} />;
};

export default AuthPage;
