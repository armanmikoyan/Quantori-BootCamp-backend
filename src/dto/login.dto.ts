import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IUserDto } from "../interfaces/user"

export class LoginDto implements IUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsString()
  @IsEmail()
  email: string
  
  @IsNotEmpty({ message: 'password is required' })
  @IsString()
  password: string;

  username: string;
};