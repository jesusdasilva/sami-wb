import { Router } from 'express';
import { getPosts, getPostById, createPost } from '../controllers/postController';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/message', createPost);

export default router;
