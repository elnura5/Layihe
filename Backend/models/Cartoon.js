import mongoose from 'mongoose'

const cartoonSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  videoUrl: String,
  category: String,
  duration: Number, // dəqiqə cinsindən
  year: Number,
  origin:String
})

export default mongoose.model('Cartoon', cartoonSchema)
