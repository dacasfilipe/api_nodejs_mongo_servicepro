// config.js
const testConfig = require('./config.test');

const isTestEnvironment = process.env.NODE_ENV === 'test';

module.exports = {
  MONGODB_URI: isTestEnvironment
    ? testConfig.MONGODB_URI
    : process.env.MONGODB_URI || 'mongodb://localhost:27017/prestadoresDB',
  PORT: isTestEnvironment ? testConfig.PORT : process.env.PORT || 5173,
};
