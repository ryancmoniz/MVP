module.exports = {
  TWITTER_BEARER_TOKEN: process.env.TWITTER_TOKEN,
  config: {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
    },
  },
  IBM_WATSON_KEY: process.env.IBM_WATSON_KEY,
};
