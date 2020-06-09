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

  const profile = {
    name: data[0].user.name,
    screen_name: data[0].user.screen_name,
    location: data[0].user.location,
    description: data[0].user.description,
    followers_count: data[0].user.followers_count,
    friends_count: data[0].user.friends_count,
    statuses_count: data[0].user.statuses_count,
    profile_image_url: data[0].user.profile_image_url.replace('normal', 'bigger'),
    latest_tweet: data[0].full_text,
  };
  data.forEach((tweet) => {
    output += tweet.full_text;
  });


  return {
    output: output.replace(urlPattern, ''),
    profile,
  };
};


const generateInputTextByHashtag = async (hashtag, type = 'mixed') => {
  let output = '';
  let maxId = Infinity;
  const data = [];
  let requests = 0;
  while (data.length <= 200 || requests <= 5) {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${hashtag}&result_type=${type}&count=100&tweet_mode=extended&max_id=${maxId}}`;

    try {
      const response = await axios.get(url, config);
      requests += 1;
      // eslint-disable-next-line prefer-destructuring
      if (response.data.search_metadata.next_results) maxId = response.data.search_metadata.next_results.split('max_id=')[1].split('&')[0];
      data.push(...response.data.statuses);
    } catch (error) {
      console.error(error);
      throw error;
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
