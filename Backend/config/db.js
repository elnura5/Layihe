
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB bağlantısı uğurla quruldu");
  } catch (error) {
    console.error("❌ MongoDB bağlantı xətası:", error.message);
    process.exit(1);
  }
};

export default connectDB;
