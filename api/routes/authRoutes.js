import { Router } from 'express';
import { createUser, loginUser } from '../controllers/authController.js'; // Importar controladores

const router = Router();

// Rutas
router.post('/signup', createUser);
router.post('/login', loginUser);

export default router;
