/* eslint-disable no-await-in-loop */
const axios = require('axios');
const { config } = require('../secret/keys.js');

const urlPattern = /([a-z]+:\/+)([^/\s]*)([a-z0-9\-@^=%&;/~+]*)[?]?([^ #]*)#?([^ #]*)/ig;

const generateInputTextByHandle = async (screename) => {
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


  return output.replace(urlPattern, '');
};


const generateInputTextByHashtag = async (hashtag, type = 'mixed') => {
  let output = '';
  let maxId = Infinity;
  const data = [];
  while (data.length <= 200) {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${hashtag}&result_type=${type}&count=100&tweet_mode=extended&max_id=${maxId}}`;

    try {
      const response = await axios.get(url, config);
      // eslint-disable-next-line prefer-destructuring
      maxId = response.data.search_metadata.next_results.split('max_id=')[1].split('&')[0];
      data.push(...response.data.statuses);
    } catch (error) {
      console.error(error);
    }
  }
  data.forEach((tweet) => {
    output += tweet.full_text;
  });

  return output.replace(urlPattern, '');
};

module.exports = {
  generateInputTextByHandle,
  generateInputTextByHashtag,
};
