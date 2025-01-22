const submissionModel = require('../models/submission.model');

async function addSubmission(submission){
    try{
        const response = await submissionModel.create({
            userId : submission.userId,
            code : submission.code,
            language : submission.language,
            problemId : submission.problemId,
        });
        return response;
    }
    catch(err){
        console.log("Submission cannot be added", err);
    }
};

module.exports = {
    addSubmission
};