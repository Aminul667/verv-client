import { z } from "zod";

// Zod schema for form validation
export const searchSchema = z.object({
  transactionType: z.enum(["rent", "buy"]),
  location: z.string().min(1, "Location is required"),
});

// Zod schema for form validation
export const emailSubmitSchema = z.object({
  email: z.string().min(1, "Email is required"),
});

// interface for the form inputs
export interface emailSubmitFormInputsSchema {
  email: string;
}
