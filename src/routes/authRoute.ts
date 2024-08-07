import loginValidator from "../middlewares/loginValidatorMiddleware"
import { Router } from "express"; 
import { AuthController } from "../controllers/authController";

export const authRoute = Router();
const controller = new AuthController();

authRoute.post("/login", loginValidator.validate, controller.login);