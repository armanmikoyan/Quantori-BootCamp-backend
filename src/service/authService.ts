import User from "../models/userModel";
import jwt from 'jsonwebtoken';
import { UnexpectedError, UserNotFoundError } from "../errors/appError";

export class AuthService {
   async login(email: string, password: string): Promise<string> {
      try {
         const user = await User.find(email);
         if (!user || user.password != password) throw new UserNotFoundError;
         const accessToken = this.generateAccessToken(email);
         return accessToken;
      } catch (error: any) {
         if (error instanceof UserNotFoundError) {
            throw error;
         }
         throw new UnexpectedError(error.message);
      }
   };

   private generateAccessToken(email: string): string {
      const payload = {
         email,
      };
      return jwt.sign(payload, process.env.JWT_SECRET as string);
   };
};
