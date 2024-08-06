import { Router } from "express"; 
import { AuthController } from "../controllers/authController";
import loginValidator from "../middlewares/loginValidatorMiddleware"

const controller = new AuthController();
export const autoRoute = Router();

autoRoute.post("/login", loginValidator.validate, controller.login);