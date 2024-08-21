import express, { Router } from 'express';
import userRoutes from './user';
import postRoutes from './Post';
import commentRoutes from './comment';


const router = express.Router();


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


export default router;