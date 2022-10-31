import Router from 'express';
import AuthorController from "../controllers/authorController.js"
import PostController from "../controllers/postController.js"
import CommentController from "../controllers/commentController.js";

export const authorRouter = new Router();

authorRouter.get('/', AuthorController.getAll);

authorRouter.get('/:id', AuthorController.getById);

authorRouter.get('/:id/posts', PostController.getByUserId);

authorRouter.get('/:id/posts-number', PostController.getCountPostsByUserId);

authorRouter.get('/:id/comments', CommentController.getByUserId);

authorRouter.get('/:id/comments-number', CommentController.getNumberByUserId);

