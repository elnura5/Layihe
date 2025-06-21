import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import cartoonRoutes from './routes/cartoonRoutes.js'


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/cizgifilmler', cartoonRoutes)

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(3000))
  .catch(err => console.log(err))
