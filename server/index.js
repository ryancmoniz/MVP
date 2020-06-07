
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
