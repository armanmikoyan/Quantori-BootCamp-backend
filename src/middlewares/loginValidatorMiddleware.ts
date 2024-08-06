import { Response, NextFunction } from "express";
import { validate, ValidationError } from "class-validator";
import { LoginDto } from "../dto/login.dto"

class LoginValidator {
   async validate(req: any, res: Response, next: NextFunction) {
      try {
         const dtoObject = Object.assign(new LoginDto(), req.body);
         const errors = await validate(dtoObject);
         if (errors.length > 0) {
            const errorMessages = errors.map((error: ValidationError) => Object.values(error.constraints || {})).flat();
            return res.status(400).json({ errors: errorMessages });
         }
         next();
      } catch (error: any) {
         return res.status(500).json({ error: error.message });
      }
   }
}

export default new LoginValidator;