import {Request, Response} from 'express'
import FormService from '../services/FormService'


class FormController {
  
  async SaveForm(req: Request, res: Response) {
    try {
      await FormService.SaveForm(req.body)
      res.sendStatus(200)
    } catch (e) {
      console.error(e)
    }
  }
  
}


export default new FormController()