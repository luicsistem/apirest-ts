import {Request, Response } from 'express';


 export   const privates = (req: Request, res: Response) => {
   return  res.json({ msg: `Hello ${req.body.email} you are authorized :D `})

};