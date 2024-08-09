"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Quantori api Documentation',
            version: '1.0.0',
            description: "Endpoint explanation",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: [
        path_1.default.join(__dirname, './auth.yaml'),
        path_1.default.join(__dirname, './profile.yaml'),
    ],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
