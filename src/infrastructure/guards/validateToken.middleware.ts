export const validateToken = (req, res, next) => {
  const token = req.header('x-token');
  if (token === '0968e158-047d-4a73-980e-c37ae143eb30') {
    next();
  } else {
    return res.status(400).json({ error: 'Token is required' });
  }
};
