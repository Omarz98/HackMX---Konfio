const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  res.json(text);
});
