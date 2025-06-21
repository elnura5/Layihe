import { Router } from 'express'
import { getCartoons, getCartoon, addManyCartoons,deleteCartoon } from '../controllers/cartoonController.js'

const router = Router()
router.get('/', getCartoons)
router.get('/:id', getCartoon)
router.post('/many', addManyCartoons)
router.delete('/:id', deleteCartoon)

export default router
