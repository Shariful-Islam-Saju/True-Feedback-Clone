import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import UserModel from "@/model/User";
import { dbConnect } from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "youremail@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      authorize: async (credentials) => {
        const user = await UserModel.findOne({ $or: [{email:credentials.email}, {username:credentials.email}] });
      },
    }),
  ],
};
