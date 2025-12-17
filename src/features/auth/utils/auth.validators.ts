import { z } from "zod";

export const authIdentifierSchema = z.object({
  identifier: z
    .string()
    .min(1, "Email or phone is required")
    .refine(
      (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^\d{10,15}$/.test(val),
      "Enter a valid email or phone number"
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AuthIdentifierFormValues = z.infer<typeof authIdentifierSchema>;
