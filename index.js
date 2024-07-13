import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json' assert { type: 'json' };
import { swaggerDocument } from './api/swagger/index.js';
import productRoutes from './api/routes/productRoutes.js';
import authRoutes from './api/routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

export default app;
