import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

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
      path.join(__dirname, './auth.yaml'),
      path.join(__dirname, './profile.yaml'),
   ],
};

const specs = swaggerJsdoc(options);

export default specs;