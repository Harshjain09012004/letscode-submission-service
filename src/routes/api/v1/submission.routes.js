const submissionController = require("../../../controllers/submission.controller");

async function submissionRoutes(fastify, options){
    fastify.post('', submissionController.creatsubmissions);
}

module.exports = submissionRoutes;