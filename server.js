const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const FILE = 'data.json';

app.post('/enquiries', (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, 'utf-8') || '[]');
  data.push(req.body);
  fs.writeFileSync(FILE, JSON.stringify(data));
  res.sendStatus(201);
});

app.get('/enquiries', (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, 'utf-8') || '[]');
  res.json(data);
});

app.listen(5000, () => console.log('API server running on port 5000'));