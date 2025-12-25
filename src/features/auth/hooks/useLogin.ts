import { useState } from "react";
import { mockLogin } from "../services/auth.mock";
import type { AuthIdentifierFormValues } from "../utils/auth.validators";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: AuthIdentifierFormValues) => {
    setLoading(true);
    setError(null);

    try {
      await mockLogin(data);
      return true;
    } catch (e: any) {
      setError(e.message ?? "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
