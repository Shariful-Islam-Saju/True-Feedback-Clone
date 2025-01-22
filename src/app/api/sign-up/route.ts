import { sendVerificationEmail } from "@/helper/sendVerificatioinEmails";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await dbConnect();
  const { username, email, password } = await req.json();
  const isUserVerified = await UserModel.findOne({
    username,
    isVerified: true,
  });
  if (isUserVerified) {
    return Response.json(
      { success: false, message: "User already exists" },
      {
        status: 400,
      }
    );
  }
  const isExistingUser = await UserModel.findOne({ email });
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  if (isExistingUser) {
    //todo: send verification email
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
      verifyCode: verificationCode,
      verifyCodeExpiry: expiryDate,
      isAcceptingMessages: true,
      messages: [], 
    });
    await user.save();
  }

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
