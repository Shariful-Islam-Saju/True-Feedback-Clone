import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "True Feedback || Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Email Sent Successfully",
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error send verification email", error.message);
    } else {
      console.log("Error send verification email", error);
    }

    return {
      success: false,
      message: "Failed to sent verification email.",
    };
  }
}
