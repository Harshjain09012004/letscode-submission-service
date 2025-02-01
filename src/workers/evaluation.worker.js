const { Worker } = require("bullmq");
const redisConnection = require("../config/redis.config");
const EvaluationJob = require("../jobs/evaluation.job");

function EvaluationWorker(queueName){
   new Worker(
        queueName,
        async (job)=>{
            if(job.name === 'EvaluationJob'){
                console.log('EvaluationJob Worker Kicking');
                
                const evaluationJobInstance = new EvaluationJob(job.data);

                evaluationJobInstance.handle(job);
                
                return true;
            }
        },
        {connection : redisConnection}
    );
}

module.exports = EvaluationWorker;