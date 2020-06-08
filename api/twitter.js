/* eslint-disable no-await-in-loop */

const axios = require('axios');
const { config } = require('../secret/keys.js');

const generateInputText = async (screename) => {
  let output = '';
  const data = [];
  for (let i = 1; i <= 3; i += 1) {
    const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screename}&count=200&tweet_mode=extended&page=${i}`;

    try {
      const response = await axios.get(url, config);
      data.push(...response.data);
    } catch (error) {
      console.error(error);
    }
  }
  data.forEach((tweet) => {
    output += tweet.full_text;
  });

  return output;
};

module.exports = generateInputText;
