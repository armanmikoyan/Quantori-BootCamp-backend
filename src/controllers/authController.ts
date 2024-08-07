import { Request, Response } from "express";
import { AuthService } from "../service/authService";
import { UserNotFoundError , UnexpectedError} from "../errors/appError";

export class AuthController {
   async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body;
         const service = new AuthService();
         const accessToken = await service.login(email, password);
         res.status(200).json({ accessToken });
      } catch(error: any) {
         if (error instanceof UserNotFoundError || error instanceof UnexpectedError) {
            res.status(error.statusCode).json({ message: error.message });
         } else {
            res.status(500).json({ message: error.message});
         };
      };
   };
};

