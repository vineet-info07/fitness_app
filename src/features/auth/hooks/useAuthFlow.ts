import { useState } from "react";
import { AuthStep } from "../types/auth.enums";
import { useLogin } from "./useLogin";
import { useVerifyOtp } from "./useVerifyOtp";

export const useAuthFlow = () => {
  const [step, setStep] = useState<AuthStep>(AuthStep.IDENTIFIER);

  const loginApi = useLogin();
  const otpApi = useVerifyOtp();

  /* ---------------- Handlers ---------------- */

  const submitIdentifier = async (identifier: string, password?: string) => {
    const success = await loginApi.login(identifier, password);

    if (success) {
      setStep(AuthStep.OTP);
    } else {
      setStep(AuthStep.ERROR);
    }
  };

  const submitOtp = async (otp: string) => {
    const success = await otpApi.verifyOtp(otp);

    if (success) {
      setStep(AuthStep.SUCCESS);
    } else {
      setStep(AuthStep.ERROR);
    }
  };

  const resetFlow = () => {
    setStep(AuthStep.IDENTIFIER);
  };

  return {
    step,

    submitIdentifier,
    submitOtp,
    resetFlow,

    isLoading: loginApi.isLoading || otpApi.isLoading,
    error: loginApi.error || otpApi.error,
  };
};
