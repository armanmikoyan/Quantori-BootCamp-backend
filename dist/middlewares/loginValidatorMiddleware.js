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
const class_validator_1 = require("class-validator");
const login_dto_1 = require("../dto/login.dto");
class LoginValidator {
    validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dtoObject = Object.assign(new login_dto_1.LoginDto(), req.body);
                const errors = yield (0, class_validator_1.validate)(dtoObject);
                if (errors.length > 0) {
                    const errorMessages = errors.map((error) => Object.values(error.constraints || {})).flat();
                    return res.status(400).json({ errors: errorMessages });
                }
                next();
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = new LoginValidator;
