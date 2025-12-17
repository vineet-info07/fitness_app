import AuthIdentifierStep from "./components/AuthIdentifierStep";
import AuthOtpStep from "./components/AuthOtpStep";
import AuthSuccessStep from "./components/AuthSuccessStep";
import AuthErrorMessage from "./components/AuthErrorMessage";

import { AuthStep } from "./types/auth.enums";
import { useAuthFlow } from "./hooks/useAuthFlow";

const AuthPage = () => {
  const { step, submitIdentifier, submitOtp, resetFlow, error } = useAuthFlow();

  switch (step) {
    case AuthStep.IDENTIFIER:
      return (
        <AuthIdentifierStep
          onSubmit={() => submitIdentifier("test@test.com", "password")}
        />
      );

    case AuthStep.OTP:
      return (
        <AuthOtpStep onSubmit={() => submitOtp("123456")} onBack={resetFlow} />
      );

    case AuthStep.SUCCESS:
      return (
        <AuthSuccessStep onContinue={() => console.log("Go to dashboard")} />
      );

    case AuthStep.ERROR:
      return (
        <AuthErrorMessage
          variant="page"
          message={error ?? "Authentication failed"}
          onPrimaryAction={resetFlow}
        />
      );

    default:
      return null;
  }
};

export default AuthPage;
