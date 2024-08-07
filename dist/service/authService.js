"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../errors/appError");
class AuthService {
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.find(email);
                if (!user || user.password != password)
                    throw new appError_1.UserNotFoundError;
                const accessToken = this.generateAccessToken(email);
                return accessToken;
            }
            catch (error) {
                if (error instanceof appError_1.UserNotFoundError) {
                    throw error;
                }
                throw new appError_1.UnexpectedError(error.message);
            }
        });
    }
    ;
    generateAccessToken(email) {
        const payload = {
            email,
        };
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET);
    }
    ;
}
exports.AuthService = AuthService;
;
