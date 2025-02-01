const submissionQueueProducer = require('../producers/submissionQueue.producer');

const submissionRepository = require('../repository/submission.repository');

const fetchProblemDetails = require('../apis/problemService.api');
const internalServerError = require('../errors/internalServer.error');

async function pingCheck(){
    return 'pong';
};

async function addSubmission(submission){
    const problemServiceResponse = await fetchProblemDetails(submission.problemId);

    if(problemServiceResponse){
        const problemResponse = problemServiceResponse.data;

        const languageStubs = problemResponse.data.codeStubs.find((stubs)=>{
            return stubs.language.toUpperCase() == submission.language.toUpperCase();
        });
        
        submission.code = languageStubs.startSnippet + "\n\n" + submission.code + "\n\n" + languageStubs.endSnippet;

        const submissionResponse = await submissionRepository.addSubmission(submission);
        console.log(submissionResponse);

        const response = await submissionQueueProducer({
            code : submission.code,
            language : submission.language,
            userId : submission.userId,
            submissionId : submissionResponse._id,
            inputData : problemResponse.data.testcases[0].input,
            outputData : problemResponse.data.testcases[0].output
        });
        return {queueResponse: response, submissionResponse};
    }
    else{
        throw new internalServerError("Some Unknown Error Occured", "Submission Cannot Be Added");
    }
};

module.exports = {
    pingCheck,
    addSubmission
};