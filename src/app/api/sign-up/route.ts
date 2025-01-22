import { sendVerificationEmail } from "@/helper/sendVerificatioinEmails";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await dbConnect();

  try {
    
  } catch (error) {
    console.log("Error in sign-up route", error);
    Response.json(
      { success: false, message: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
