import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ENV dəyişkənləri yüklə

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB bağlantısı uğurludur");
  } catch (err) {
    console.error("❌ MongoDB bağlantı xətası:", err.message);
    process.exit(1);
  }
};

connectDB();
