import { useState } from "react";
import { mockVerifyOtp } from "../services/auth.mock";

export function useVerifyOtp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyOtp = async (otp: string) => {
    setLoading(true);
    setError(null);

    try {
      await mockVerifyOtp(otp);
      return true;
    } catch (e: any) {
      setError(e.message ?? "Invalid OTP");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading, error };
}
