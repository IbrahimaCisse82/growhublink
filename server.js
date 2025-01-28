const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue à Mon Application Accelerator!');
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
