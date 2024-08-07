import { IUser } from '../interfaces/user';
import fs from "fs/promises"


class User implements IUser {
   email: string;
   username: string;
   password: string;

   constructor(email: string, username: string, password: string) {
      this.email = email;
      this.username = username;
      this.password = password;
   }

   static async find(email: string): Promise<IUser | null> {
      const pathToDb = process.cwd() + '/src/databases/data.json';
      const data = await fs.readFile(pathToDb, "utf8");
      const jsonData = JSON.parse(data);
      for(const user of jsonData) {
         if (user.email == email) {
            return user;
         }
      }
      return null;
   }
};


export default User; 
