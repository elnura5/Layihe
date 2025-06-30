import Cartoon from '../models/Cartoon.js'

// GET /api/cartoons
export const getCartoons = async (req, res) => {
  try {
    const cartoons = await Cartoon.find()
    res.json(cartoons)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET /api/cartoons/:id
export const getCartoon = async (req, res) => {
  try {
    const cartoon = await Cartoon.findById(req.params.id)
    if (!cartoon) return res.status(404).json({ error: 'Tapılmadı' })
    res.json(cartoon)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST /api/cartoons/many
export const addManyCartoons = async (req, res) => {
  try {
    const cartoons = req.body
    if (!Array.isArray(cartoons)) {
      return res.status(400).json({ error: 'Array gözlənilir' })
    }
    await Cartoon.insertMany(cartoons)
    res.status(201).json({ message: "Added" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
export const addSingleCartoon = async (req, res) => {
  try {
    const cartoon = new Cartoon(req.body);
    await cartoon.save();
    res.status(201).json({ message: "Tək cizgi filmi əlavə edildi", cartoon });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCartoon = async (req, res) => {
  try {
    const { id } = req.params
    const deletedCartoon = await Cartoon.findByIdAndDelete(id)

    if (!deletedCartoon) {
      return res.status(404).json({ message: "Tapılmadı" })
    }

    res.status(200).json({ message: "Uğurla silindi" })
  } catch (err) {
    res.status(500).json({ message: "Server xətası" })
  }
}
export const updateCartoon = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await Cartoon.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Cizgi filmi tapılmadı" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("❌ PUT xətası:", error.message);
    res.status(500).json({ message: "Xəta baş verdi", error: error.message });
  }
};