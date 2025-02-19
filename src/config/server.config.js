const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT || 3000,
    REDIS_PORT : process.env.REDIS_PORT || 6379,
    REDIS_HOST : process.env.REDIS_HOST || '127.0.0.1',
    ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    NODE_ENV : process.env.NODE_ENV || 'development',
    PROBLEM_SERVICE_URL : process.env.PROBLEM_SERVICE_URL,
    WEBSOCKET_SERVICE_URL : process.env.WEBSOCKET_SERVICE_URL || 'http://localhost:10000'
};