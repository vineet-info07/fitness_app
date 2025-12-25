import type { AuthIdentifierFormValues } from "../utils/auth.validators";

export async function mockLogin(_data: AuthIdentifierFormValues) {
  await delay(800);
  return true;
}

export async function mockVerifyOtp(otp: string) {
  await delay(800);

  if (otp !== "123456") {
    throw new Error("Incorrect OTP");
  }

  return { token: "mock-token" };
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
