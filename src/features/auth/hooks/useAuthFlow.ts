import { useState } from "react";
import type { AuthIdentifierFormValues } from "../utils/auth.validators";

export type AuthStep = "IDENTIFIER" | "OTP" | "SUCCESS" | "ERROR";

export function useAuthFlow() {
  const [step, setStep] = useState<AuthStep>("IDENTIFIER");
  const [identifierData, setIdentifierData] =
    useState<AuthIdentifierFormValues | null>(null);

  const startOtpFlow = (data: AuthIdentifierFormValues) => {
    setIdentifierData(data);
    setStep("OTP");
  };

  const handleOtpSuccess = () => setStep("SUCCESS");

  const handleError = () => setStep("ERROR");

  const resetFlow = () => {
    setIdentifierData(null);
    setStep("IDENTIFIER");
  };

  return {
    step,
    identifierData,
    startOtpFlow,
    handleOtpSuccess,
    handleError,
    resetFlow,
  };
}
