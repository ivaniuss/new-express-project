import jwt from 'jsonwebtoken';

export const authorize = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const jwtToken = token.split(' ')[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
