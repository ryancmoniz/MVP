const { generateInputTextByHashtag } = require('../../api/twitter.js');
const { generatePersonalityProfile } = require('../../api/watson.js');
const { getBigFive } = require('../../helpers/getBigFive.js');
const { getNeeds } = require('../../helpers/getNeeds.js');
const { getValues } = require('../../helpers/getValues.js');

const getPersonalityByHashtag = (req, res) => {
  const results = {};
  const { hashtag } = req.body;
  const checkWord = new RegExp('^[a-zA-Z0-9]*$');

  if (checkWord.test(hashtag)) {
    generateInputTextByHashtag(hashtag)
      .then((input) => generatePersonalityProfile(input))
      .then((profile) => {
        results.personality = getBigFive(profile.personality);
        results.needs = getNeeds(profile.needs);
        results.values = getValues(profile.values);
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
  getPersonalityByHashtag,
};
