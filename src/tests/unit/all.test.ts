import execAllLoginTests from "./login.test";
import execAllProfileTests from "./profile.test";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
   try {
      await execAllLoginTests();
      await execAllProfileTests();
   } catch (error: any) {
      console.log(error.message);
   }
};

run();