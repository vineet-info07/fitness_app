import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (identifier: string, password?: string) => {
    setIsLoading(true);
    setError(null);

    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        setIsLoading(false);

        // Mock failure rule
        if (identifier === "fail@test.com") {
          setError("Invalid email or password");
          resolve(false);
        } else {
          resolve(true);
        }
      }, 1200);
    });
  };

  return {
    login,
    isLoading,
    error,
  };
};
