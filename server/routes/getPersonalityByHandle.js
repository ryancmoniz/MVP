const { generateInputTextByHandle } = require('../../api/twitter.js');
const { generatePersonalityProfile } = require('../../api/watson.js');
const { getBigFive } = require('../../helpers/getBigFive.js');
const { getNeeds } = require('../../helpers/getNeeds.js');
const { getValues } = require('../../helpers/getValues.js');

const getPersonalityByHandle = (req, res) => {
  const results = [];
  const { handle } = req.body;
  const checkHandle = new RegExp('^[a-zA-Z0-9_]*$');

  if (checkHandle.test(handle)) {
    generateInputTextByHandle(handle)
      .then((input) => generatePersonalityProfile(input))
      .then((profile) => {
        results.push(getBigFive(profile.personality));
        results.push(getNeeds(profile.needs));
        results.push(getValues(profile.values));
        res.status(200).send(results);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error generating profile');
      });
  } else {
    res.status(500).send('Invalid input');
  }
};

module.exports = {
  getPersonalityByHandle,
};
