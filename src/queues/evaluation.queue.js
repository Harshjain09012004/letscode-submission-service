const { Queue } = require("bullmq");
const redisConnection = require("../config/redis.config");

const EvaluationQueue = new Queue('EvaluationQueue', {connection: redisConnection});

module.exports = EvaluationQueue;