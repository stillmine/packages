const test = require('@stillmine/webpack');

module.exports = {
  webpack: config => {
    console.log(test);

    return config;
  },
};
