/* eslint-env node */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos ao WebAcademy!!');
});

app.get('/cicd', (req, res) => {
  res.send('Funfou');
});

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
});
