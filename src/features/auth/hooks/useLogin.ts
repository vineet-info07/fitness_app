// features/auth/hooks/useLogin.ts
import { useState } from "react";
import { mockLogin } from "../services/auth.mock";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (identifier: string) => {
    try {
      setLoading(true);
      setError(null);
      await mockLogin(identifier);
      return true;
    } catch (err: any) {
      setError(err.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
};
