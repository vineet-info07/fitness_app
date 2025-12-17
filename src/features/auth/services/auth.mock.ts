export const mockLogin = async (identifier: string) => {
  await new Promise((r) => setTimeout(r, 1200));

  if (!identifier.includes("@")) {
    throw new Error("Invalid email address");
  }

  return { success: true };
};

export const mockVerifyOtp = async (otp: string) => {
  await new Promise((r) => setTimeout(r, 1200));

  if (otp !== "123456") {
    throw new Error("Invalid OTP");
  }

  return { verified: true };
};
