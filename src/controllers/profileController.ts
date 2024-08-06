import { Request, Response } from "express";
import { UserNotFoundError , UnexpectedError} from "../errors/appError";
import { ProfileService } from "../service/profileService";

export class ProfileController {
   async getProfileInfo(req: Request, res: Response): Promise<void> {
      try {
         const { authorizedUser: { email } } = req.body;
         const service = new ProfileService();
         const info = await service.getProfileInfo(email);
         res.status(200).json(info);
      } catch(error: any) {
         if (error instanceof UserNotFoundError || error instanceof UnexpectedError) {
            res.status(error.statusCode).json({ message: error.message });
         } else {
            res.status(500).json({ message: error.message});
         }
      }
   };
};

