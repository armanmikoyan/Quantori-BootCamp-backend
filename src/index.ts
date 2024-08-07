import express from "express";
import swaggerSpecs from "./swagger/config";
import swaggerUi from "swagger-ui-express";
import bodyParser from 'body-parser';
import cors from "cors"
import dotenv from "dotenv"
import { profileRoute } from "./routes/profileRoute";
import { authRoute } from "./routes/authRoute";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/", authRoute); 
app.use("/", profileRoute); 

const PORT = process.env.PORT || 6666;
app.listen(PORT, () => {
   console.log(`Server is working on port ${PORT}`);
});   
