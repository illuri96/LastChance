import express from 'express';
import auth from "../middleware/auth.js";


import { getPost, getPosts, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/:id', auth, getPost);
router.get('/', auth, getPosts);
router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;