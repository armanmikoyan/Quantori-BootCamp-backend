import mongoose from "mongoose";

export const mongoDbStart = async (): Promise<void> => {
   try {    
      await mongoose.connect(`${process.env.MONGO_CONNECTION}`);   
      console.log("Connected to Database");     
   } catch (error: any) {
      console.log("Error in Database", error.message);
   }
};