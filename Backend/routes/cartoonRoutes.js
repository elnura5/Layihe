import express from 'express'
import {
  getCartoons,
  addCartoon,
  updateCartoon,
  deleteCartoon,
  addManyCartoons
} from '../controllers/cartoonController.js'

const router = express.Router()

router.get('/', getCartoons)
router.post('/', addCartoon)
router.post('/many', addManyCartoons) 
router.put('/:id', updateCartoon)
router.delete('/:id', deleteCartoon)

export default router
