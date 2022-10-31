import Router from 'express';
import CommentController from "../controllers/commentController.js"
import { authMiddleware } from '../middlewares/authMiddleware.js'

export const commentRouter = new Router();

commentRouter.get('/', CommentController.getAll);

commentRouter.get('/:id', CommentController.getOneById);

commentRouter.post('/', authMiddleware, CommentController.createComment);

commentRouter.delete('/:id', CommentController.deleteById);