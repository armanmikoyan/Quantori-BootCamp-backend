import express from "express";
import swaggerSpecs from "./swagger/config";
import swaggerUi from "swagger-ui-express";
import bodyParser from 'body-parser';
import cors from "cors"
import { mongoDbStart } from "./databases/mongodb";
import { autoRoute } from "./routes/authRoute";
import { profileRoute } from "./routes/profileRoute";

const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); // api documentation
app.use("/", autoRoute); 
app.use("/", profileRoute); 

mongoDbStart().then(() => {
   const PORT = process.env.PORT || 6666;
   app.listen(PORT, () => {
      console.log(`Server is working on port ${PORT}`);
   });   
})
