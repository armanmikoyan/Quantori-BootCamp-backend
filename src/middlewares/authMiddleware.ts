import { Request, Response, NextFunction } from "express";
import { AccessTokenError } from "../errors/appError";
import jwt from "jsonwebtoken";

export const checkUserAuthentification = (req: Request, res: Response, next: NextFunction): void => {
   try {
      const accessToken = req.headers.authorization?.split(" ")[1];
      if (!accessToken) throw new AccessTokenError; 

      jwt.verify(accessToken, process.env.JWT_SECRET as string, async (err: any, decoded): Promise<void> => {
         if (err) {
            const error = new AccessTokenError();
            res.status(error.statusCode).json({ error: error.message });
         } else {
            req.body.authorizedUser = decoded;
            next();
         }
      });    
   } catch(error: any) {
      if (error instanceof AccessTokenError) {
         res.status(error.statusCode).json({ error: error.message })  
      } else {
         res.status(500).json({ error: error.message })  
      }
   }
};