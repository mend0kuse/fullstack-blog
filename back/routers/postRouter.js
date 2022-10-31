import Router from 'express';
import multer from 'multer';

import PostsController from "../controllers/postController.js"

import { authMiddleware } from '../middlewares/authMiddleware.js'

export const postsRouter = new Router();


const store = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, `./back/images`);
    },
    filename(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
});

const upload = multer({ storage: store }).single('file');

postsRouter.get('/', PostsController.getAll);

postsRouter.get('/:id', PostsController.getById);

postsRouter.post('/', authMiddleware, upload, PostsController.createPost);

postsRouter.put('/', authMiddleware, upload, PostsController.updatePost);

postsRouter.delete('/:id', authMiddleware, PostsController.deleteById);

