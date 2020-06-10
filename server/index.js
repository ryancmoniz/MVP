const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getPersonalityByHashtag } = require('./routes/getPersonalityByHashtag');
const { getPersonalityByHandle } = require('./routes/getPersonalityByHandle');


const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;

app.post('/personality/hashtag/', getPersonalityByHashtag);
app.post('/personality/handle/', getPersonalityByHandle);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
