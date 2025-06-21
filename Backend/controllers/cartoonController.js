import Cartoon from '../models/Cartoon.js'

export const getCartoons = async (req, res) => {
  try {
    const cartoons = await Cartoon.find()
    res.json(cartoons)
  } catch (err) {
    res.status(500).json({ error: 'Xəta baş verdi' })
  }
}

export const addCartoon = async (req, res) => {
  try {
    const data = req.body
    if (Array.isArray(data)) {
      await Cartoon.insertMany(data)
      res.status(201).json({ message: 'Cizgi filmləri əlavə olundu' })
    } else {
      const newCartoon = new Cartoon(data)
      await newCartoon.save()
      res.status(201).json({ message: 'Cizgi filmi əlavə olundu' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Əlavə zamanı xəta oldu' })
  }
}

export const updateCartoon = async (req, res) => {
  try {
    const updated = await Cartoon.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'Yenilənmə zamanı xəta oldu' })
  }
}

export const deleteCartoon = async (req, res) => {
  try {
    await Cartoon.findByIdAndDelete(req.params.id)
    res.json({ message: 'Cizgi filmi silindi' })
  } catch (err) {
    res.status(500).json({ error: 'Silinmə zamanı xəta oldu' })
  }
}
export const addManyCartoons = async (req, res) => {
  try {
    const cartoons = req.body

    if (!Array.isArray(cartoons)) {
      return res.status(400).json({ error: "Məlumat array formatında olmalıdır." })
    }

    await Cartoon.insertMany(cartoons)
    res.status(201).json({ message: "Cizgi filmləri uğurla əlavə olundu!" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}