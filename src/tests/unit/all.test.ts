import execAllLoginTests from "./login.test";
import execAllProfileTests from "./profile.test";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
   await execAllLoginTests();
   await execAllProfileTests();
};

run();