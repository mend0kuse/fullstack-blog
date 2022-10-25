import Router from 'express';
import PostsController from "../controllers/postController.js"

import { authMiddleware } from '../middlewares/authMiddleware.js'

export const postsRouter = new Router();

postsRouter.get('/', PostsController.getAll);

postsRouter.get('/:id', PostsController.getById);

postsRouter.post('/', authMiddleware, PostsController.createPost);
// postsRouter.post('/', PostsController.createPost);


postsRouter.put('/', authMiddleware, PostsController.updatePost);

postsRouter.delete('/:id', authMiddleware, PostsController.deleteById);

