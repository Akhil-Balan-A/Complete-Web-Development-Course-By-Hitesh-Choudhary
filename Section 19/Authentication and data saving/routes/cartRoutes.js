import express from 'express';
import { addToCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/cart/add', addToCart);

export default router;
