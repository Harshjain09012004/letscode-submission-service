const submissionService = require('../services/submission.service');

async function pingRequest(req, res){
    const response = await submissionService.pingCheck();
    return res.send({data : response});
};

//ADD VALIDATION LAYER
async function creatsubmissions(req, res, next){
    const response = await submissionService.addSubmission(req.body);

    return res.status(200).send({
        success : true,
        data : response,
        err : {},
        description : 'Submission Added'
    });
};

module.exports = {
    pingRequest,
    creatsubmissions
};