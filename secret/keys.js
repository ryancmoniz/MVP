const keys = process.env.NODE_ENV === 'production' ? require('./prod.js') : require('./dev.js');


module.exports = keys;
