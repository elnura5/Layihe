import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import videoRoutes from './routes/cartoonRoutes.js';
import UserRouter  from "./routes/UsersRoute.js"
import "./config/db.js"
import cors from "cors"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 




app.use('/api/cizgifilmler', videoRoutes);
app.use("/users",UserRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-də işləyir`);

});
