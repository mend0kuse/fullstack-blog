import Router from 'express';
import CommentController from "../controllers/commentController.js"

export const commentRouter = new Router();

commentRouter.get('/', CommentController.getAll);

commentRouter.get('/:id', CommentController.getOneById);

commentRouter.post('/', CommentController.createComment);

commentRouter.put('/', CommentController.updateComments);

commentRouter.delete('/:id', CommentController.deleteById);