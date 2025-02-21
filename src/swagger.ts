import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Transações",
      version: "1.0.0",
      description: "API para gerenciar transações",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: ["./src/modules/transactions/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
