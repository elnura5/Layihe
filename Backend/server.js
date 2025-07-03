import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/UsersRoute.js';
import cartoonRoutes from './routes/cartoonRoutes.js';
import './config/db.js';

dotenv.config(); // ✅ Əvvəldə çağır

const app = express();

app.use(cors());
app.use(express.json()); // ✅ POST body-ləri oxumaq üçün bu lazımdır!

// Routes
app.use('/users', userRoutes);
app.use('/api/cizgifilmler', cartoonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server ${PORT}-də işləyir`);
});
