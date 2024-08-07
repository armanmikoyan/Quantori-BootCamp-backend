"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const loginValidatorMiddleware_1 = __importDefault(require("../middlewares/loginValidatorMiddleware"));
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
exports.authRoute = (0, express_1.Router)();
const controller = new authController_1.AuthController();
exports.authRoute.post("/login", loginValidatorMiddleware_1.default.validate, controller.login);
