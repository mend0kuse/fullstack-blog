import Router from 'express';
import AuthController from '../controllers/authController.js'
export const routerAuth = new Router();


routerAuth.post('/registration', AuthController.registration)
routerAuth.post('/login', AuthController.login)