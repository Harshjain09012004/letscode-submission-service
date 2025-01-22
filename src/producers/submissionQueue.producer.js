const SubmissionQueue = require('../queues/submission.queue');

async function SubmissionQueueProducer(payload){
    const response = await SubmissionQueue.add('SubmissionJob', payload);
    console.log("Producer Added the Submission Job in queue", payload);
    return response;
}

module.exports = SubmissionQueueProducer;