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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const appError_1 = require("../errors/appError");
const profileService_1 = require("../service/profileService");
class ProfileController {
    getProfileInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorizedUser: { email } } = req.body;
                const service = new profileService_1.ProfileService();
                const info = yield service.getProfileInfo(email);
                res.status(200).json(info);
            }
            catch (error) {
                if (error instanceof appError_1.UserNotFoundError || error instanceof appError_1.UnexpectedError) {
                    res.status(error.statusCode).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: error.message });
                }
            }
        });
    }
    ;
}
exports.ProfileController = ProfileController;
;
