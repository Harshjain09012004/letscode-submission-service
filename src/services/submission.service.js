const submissionQueueProducer = require('../producers/submissionQueue.producer');

const submissionRepository = require('../repository/submission.repository');

async function pingCheck(){
    return 'pong';
};

async function addSubmission(submission){
    const submissionResponse = await submissionRepository.addSubmission(submission);

    console.log(submissionResponse);

    const response = await submissionQueueProducer(submission);

    return {queueResponse: response, submissionResponse};
};

module.exports = {
    pingCheck,
    addSubmission
};