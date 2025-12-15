import { useState } from "react";

import AuthIdentifierStep from "./components/AuthIdentifierStep";
import AuthOtpStep from "./components/AuthOtpStep";
import AuthSuccessStep from "./components/AuthSuccessStep";
import AuthErrorMessage from "./components/AuthErrorMessage";

import { AuthStep } from "./types/auth.enums";

const AuthPage = () => {
  const [step, setStep] = useState<AuthStep>(AuthStep.IDENTIFIER);

  /* ---------------- Step Handlers ---------------- */

  const handleIdentifierSubmit = () => {
    // Phase-1: mock success
    setStep(AuthStep.OTP);
  };

  const handleOtpSubmit = () => {
    // Phase-1: mock success
    setStep(AuthStep.SUCCESS);
  };

  const handleError = () => {
    setStep(AuthStep.ERROR);
  };

  const handleRetry = () => {
    setStep(AuthStep.IDENTIFIER);
  };

  /* ---------------- Renderer ---------------- */

  const renderStep = () => {
    switch (step) {
      case AuthStep.IDENTIFIER:
        return (
          <AuthIdentifierStep
            onSubmit={handleIdentifierSubmit}
            onSwitchAuthMode={() => console.log("Switch auth mode")}
            onForgotPassword={() => console.log("Forgot password")}
          />
        );

      case AuthStep.OTP:
        return (
          <AuthOtpStep
            onSubmit={handleOtpSubmit}
            onBack={() => setStep(AuthStep.IDENTIFIER)}
          />
        );

      case AuthStep.SUCCESS:
        return (
          <AuthSuccessStep
            onContinue={() => console.log("Navigate to dashboard")}
          />
        );

      case AuthStep.ERROR:
        return (
          <AuthErrorMessage
            variant="page"
            title="Authentication Failed"
            message="Please check your credentials and try again."
            onPrimaryAction={handleRetry}
          />
        );

      default:
        return null;
    }
  };

  return renderStep();
};

export default AuthPage;
