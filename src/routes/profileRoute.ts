import { Router } from "express"; 
import { ProfileController } from "../controllers/profileController";
import { checkUserAuthentification } from "../middlewares/authMiddleware"

export const profileRoute = Router();
const controller = new ProfileController();

profileRoute.get("/profile", checkUserAuthentification, controller.getProfileInfo);