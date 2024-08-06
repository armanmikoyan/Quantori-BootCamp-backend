import express from "express";
import { mongoDbStart } from "./databases/mongodb";

const app = express();

const PORT = process.env.PORT || 6666;
mongoDbStart();

app.listen(PORT, () => {
   console.log(`Server is working on port ${PORT}`);
})
