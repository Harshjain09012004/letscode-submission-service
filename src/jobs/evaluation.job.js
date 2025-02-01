const axios = require('axios');
const submissionModel = require('../models/submission.model');

const { WEBSOCKET_SERVICE_URL } = require('../config/server.config');
const WEBSOCKET_API_URL = WEBSOCKET_SERVICE_URL + '/api/v1/sendPayload';

class EvalutionJob{
    constructor(payload){
        this.name = this.constructor.name;
        this.payload = payload;
    }

    async handle(job){
        try{
            const result = await submissionModel.updateOne({_id : this.payload.submissionId},{$set : {
                status : this.payload.status
            }});

            if(result.modifiedCount){
                const response = await axios.post(WEBSOCKET_API_URL, this.payload);
                console.log("Sending Data On client", this.payload);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    failed(job){
        console.log("Evalution Job Failed");
    }
}

module.exports = EvalutionJob;