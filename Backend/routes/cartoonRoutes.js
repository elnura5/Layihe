import express from 'express';
import { getCartoons, getCartoon, addManyCartoons,deleteCartoon,updateCartoon,addSingleCartoon } from '../controllers/cartoonController.js'
const router = express.Router();
// const router = Router()
router.get('/', getCartoons)
router.get('/:id', getCartoon)
router.post('/many', addManyCartoons)
router.post('/', addSingleCartoon);
router.delete('/:id', deleteCartoon)
router.put('/:id', updateCartoon); 

export default router
