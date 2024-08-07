import { Document } from 'mongoose';

interface IUserDto {
  email: string;
  username: string;
};

interface IUser extends IUserDto {
  password: string;
};

export {
  IUserDto, 
  IUser,
};
