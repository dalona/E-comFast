import { Router } from 'express';
import {userRouter, productRouter} from './';
import { authRouter } from './authRoutes';
import { orderRouter } from './orderRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/orders',orderRouter)

export default router;
