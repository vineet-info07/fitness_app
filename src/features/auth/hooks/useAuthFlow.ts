import { useState } from "react";
import { AuthStep } from "../types/auth.enums";

export const useAuthFlow = () => {
  const [step, setStep] = useState<AuthStep>(AuthStep.IDENTIFIER);
  const [identifier, setIdentifier] = useState<string>("");

  const goToOtp = (identifier: string) => {
    setIdentifier(identifier);
    setStep(AuthStep.OTP);
  };

  const goToSuccess = () => {
    setStep(AuthStep.SUCCESS);
  };

  const goToError = () => {
    setStep(AuthStep.ERROR);
  };

  const resetFlow = () => {
    setIdentifier("");
    setStep(AuthStep.IDENTIFIER);
  };

  return {
    step,
    identifier,
    goToOtp,
    goToSuccess,
    goToError,
    resetFlow,
  };
};
