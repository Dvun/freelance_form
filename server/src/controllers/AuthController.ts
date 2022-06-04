import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';


class AuthController {
  
  async Login(req: Request, res: Response, next: NextFunction) {
    const data = req.body
    try {
      const url = await AuthService.Login(data)
      console.log(url);
    } catch (e) {
      
    }
  }
  
}


export default new AuthController()