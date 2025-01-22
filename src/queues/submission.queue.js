const { Queue } = require("bullmq");
const redisConnection = require("../config/redis.config");

const SubmissionQueue = new Queue('SubmissionQueue', {connection: redisConnection});

module.exports = SubmissionQueue;