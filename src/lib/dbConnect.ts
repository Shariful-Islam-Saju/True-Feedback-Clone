import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(
      (process.env.MONGODB_URI as string) || ""
    );

    console.log(db)

    connection.isConnected = db.connections[0].readyState;

    console.log('DB connection successfully')
    
  } catch (error) {
    console.error('Database connection error:', error);

    process.exit(1)
  }
}
