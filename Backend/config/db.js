
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB bağlandı'))
  .catch(err => console.log('MongoDB bağlantı xətası:', err));

