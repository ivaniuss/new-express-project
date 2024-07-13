// authController.js
import bcrypt from 'bcryptjs';
import { generateToken } from '../middleware/authMiddleware.js';
const { User } = db;

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('credentials', username, hashedPassword);
    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Encontrar el usuario en la base de datos por nombre de usuario
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generar un token JWT
    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
