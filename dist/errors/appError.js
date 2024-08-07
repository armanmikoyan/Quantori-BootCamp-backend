"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = exports.AccessTokenError = exports.UserNotFoundError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
;
class UserNotFoundError extends AppError {
    constructor() {
        super("User not found", 403);
    }
    ;
}
exports.UserNotFoundError = UserNotFoundError;
;
class AccessTokenError extends AppError {
    constructor() {
        super("Access token not found or it's wrong", 401);
    }
    ;
}
exports.AccessTokenError = AccessTokenError;
;
class UnexpectedError extends AppError {
    constructor(messsage) {
        super(messsage, 501);
    }
    ;
}
exports.UnexpectedError = UnexpectedError;
;
