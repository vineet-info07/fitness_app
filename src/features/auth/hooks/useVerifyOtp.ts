// features/auth/hooks/useVerifyOtp.ts
import { useState } from "react";
import { mockVerifyOtp } from "../services/auth.mock";

export const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyOtp = async (otp: string) => {
    try {
      setLoading(true);
      setError(null);
      await mockVerifyOtp(otp);
      return true;
    } catch (err: any) {
      setError(err.message || "OTP verification failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    verifyOtp,
    loading,
    error,
  };
};
