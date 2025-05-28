const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

let services = [];

app.get('/services', (req, res) => res.json(services));
app.post('/services', (req, res) => { services.push(req.body); res.sendStatus(201); });
app.put('/services/:id', (req, res) => { services[req.params.id] = req.body; res.sendStatus(200); });
app.delete('/services/:id', (req, res) => { services.splice(req.params.id, 1); res.sendStatus(200); });

app.listen(4000, () => console.log('Admin server running on port 4000'));