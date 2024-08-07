export class AppError extends Error {
   public statusCode: number;
   
   constructor(message: string, statusCode: number) {
     super(message);
     this.statusCode = statusCode;
   }
};

class UserNotFoundError extends AppError {
   constructor() {
     super("User not found", 403);
   };
};

class AccessTokenError extends AppError {
   constructor() {
     super("Access token not found or it's wrong", 401);
   };
};

class UnexpectedError extends AppError {
   constructor(messsage: string) {
     super(messsage, 501);
   };
};

export {
   UserNotFoundError,
   AccessTokenError,
   UnexpectedError,
};