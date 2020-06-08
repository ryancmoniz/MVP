const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const { IBM_WATSON_KEY } = require('../secret/keys.js');

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  authenticator: new IamAuthenticator({
    apikey: IBM_WATSON_KEY,
  }),
  url: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/c31ca6ff-f663-4231-b9f3-6c1339e89cbc',
  disableSslVerification: true,
});


const generatePersonalityProfile = async (inputText) => {
  const profileParams = {
    content: inputText,
    contentType: 'text/html',
    consumptionPreferences: true,
    rawScores: true,
  };

  return personalityInsights.profile(profileParams)
    .then((response) => response.result)
    .catch((err) => console.error(err));
};

module.exports = {
  generatePersonalityProfile,
};
