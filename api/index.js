import express from 'express';

const app = express();

// Suas rotas aqui
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

export default app;