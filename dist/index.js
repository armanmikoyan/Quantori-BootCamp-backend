"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./swagger/config"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const profileRoute_1 = require("./routes/profileRoute");
const authRoute_1 = require("./routes/authRoute");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(config_1.default));
app.use("/", authRoute_1.authRoute);
app.use("/", profileRoute_1.profileRoute);
const PORT = process.env.PORT || 6666;
app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
    console.log(`Swagger is avalable at url http://localhost:${PORT}/api/docs/`);
});
