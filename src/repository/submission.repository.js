const submissionModel = require('../models/submission.model');
const internalServerError = require('../errors/internalServer.error');

async function addSubmission(submission){
    // throw new internalServerError('Submission cannot be added!', 'Unknown Error');
    const response = await submissionModel.create({
        userId : submission.userId,
        code : submission.code,
        language : submission.language,
        problemId : submission.problemId,
    });
    return response;
};

module.exports = {
    addSubmission
};