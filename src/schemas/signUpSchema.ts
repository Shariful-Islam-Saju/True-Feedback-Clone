import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "User name must be atleast 2 characters")
  .max(20, "User name must be no more 20 characters");

export const signUpSchema = z.object({
  userName: userNameValidation,
  email: z.string().email({message: 'Invalid Email Address'}),
  password:z.string().min(6, {message:"Password must be atleast 6 characters"})
});
