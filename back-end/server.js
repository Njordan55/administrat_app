const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Backend läuft!');
});

app.listen(port, () => {
  console.log(`Backend läuft auf Port ${port}`);
});