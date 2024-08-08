"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoute = void 0;
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
exports.profileRoute = (0, express_1.Router)();
const controller = new profileController_1.ProfileController();
exports.profileRoute.get("/profile", authMiddleware_1.checkUserAuthentification, controller.getProfileInfo);
