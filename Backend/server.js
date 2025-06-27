import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import videoRoutes from './routes/cartoonRoutes.js';
import cors from "cors"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // body parser

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB bağlandı'))
  .catch(err => console.log('MongoDB bağlantı xətası:', err));

// Videolar üçün API routeları
app.use('/api/cizgifilmler', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-də işləyir`);

});
