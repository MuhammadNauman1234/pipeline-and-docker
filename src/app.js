const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.status(200).json({ message: `Hello, ${name}!` });
});

module.exports = app;
