import express from 'express'
import FormController from '../controllers/FormController'
const formRouter = express.Router()


formRouter.post('/send', FormController.SaveForm)

export default formRouter