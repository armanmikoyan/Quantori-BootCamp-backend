import express from "express";
import { mongoDbStart } from "./databases/mongodb";
import { autoRoute } from "./routes/authRoute";
import { profileRoute } from "./routes/profileRoute";
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 6666;
mongoDbStart();

app.use(express.json());
app.use(bodyParser.json());

app.use("/", autoRoute); 
app.use("/", profileRoute); 

app.listen(PORT, () => {
   console.log(`Server is working on port ${PORT}`);
})
