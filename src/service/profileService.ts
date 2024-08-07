import User from "../models/userModel";
import { UnexpectedError, UserNotFoundError } from "../errors/appError";
import { IUserDto } from "../interfaces/user"

export class ProfileService {
   async getProfileInfo(email: string): Promise<IUserDto> {
      try {
         const user = await User.find(email);
         if (!user) throw new UserNotFoundError;

         const info: IUserDto = {
            email: user.email,
            username: user.username,
         };     
         return info;
      } catch (error: any) {
         if (error instanceof UserNotFoundError) {
            throw error;
         }
         throw new UnexpectedError(error.message);
      }
   };
 };
