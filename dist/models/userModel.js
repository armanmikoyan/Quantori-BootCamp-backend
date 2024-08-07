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
const promises_1 = __importDefault(require("fs/promises"));
class User {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    static find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const pathToDb = process.cwd() + '/src/databases/data.json';
            const data = yield promises_1.default.readFile(pathToDb, "utf8");
            const jsonData = JSON.parse(data);
            for (const user of jsonData) {
                if (user.email == email) {
                    return user;
                }
            }
            return null;
        });
    }
}
;
exports.default = User;
