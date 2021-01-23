const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  HOST: process.env.HOST || 'localhost',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
};
