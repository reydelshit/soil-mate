const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let result = {}

app.post('/update', (req, res) => {
  result = req.body;

  console.log('Received data:', result);

  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json({ res: result }); // Replace {} with your actual data
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});