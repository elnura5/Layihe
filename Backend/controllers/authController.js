import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function register(req, res) {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed
    })
    await user.save()
    res.status(201).json("Qeydiyyat tamamlandı")
  } catch (err) {
    res.status(500).json("Xəta baş verdi")
  }
}

export async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).json("İstifadəçi tapılmadı")

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) return res.status(400).json("Şifrə yanlışdır")

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
    res.json({ token })
  } catch (err) {
    res.status(500).json("Giriş zamanı xəta baş verdi")
  }
}
