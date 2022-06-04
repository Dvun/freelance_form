import express from 'express'
import AuthController from '../controllers/AuthController';
const authRouter = express.Router()


authRouter.get('/login', AuthController.Login)

export default authRouter