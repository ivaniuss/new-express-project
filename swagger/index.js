// Importa las definiciones desde tu archivo de definiciones
import { auth } from "./auth.js";
import { products } from "./products.js";
import { definitions } from "./definitions.js";

// Define tu documento de Swagger
export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Product Manager",
    version: "1.0.0",
    description: "Endpoint documentation",
    contact: {
      name: "Ivan",
      email: "ivan.emi94@gmail.com",
      url: "github.com/ivaniuss",
    },
  },
  servers: [
    {
      url: "/api",
      description: "Base URL of the API server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
    },
    schemas: {
      ...definitions,
    },
  },
  tags: [
    {
      name: "Auth",
      description: "Authentications",
    },
    {
      name: "Products",
      description: "Products",
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {
    ...auth,
    ...products,
  },
};

