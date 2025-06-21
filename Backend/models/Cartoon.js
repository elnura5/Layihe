import mongoose from 'mongoose'

const cartoonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  year: Number,
 
})

export default mongoose.model('Cizgifilm', cartoonSchema)
