import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/a', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'a.html'));
});


app.get('/b', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'b.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
