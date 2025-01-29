const axios = require('axios');
const { PROBLEM_SERVICE_URL } = require('../config/server.config');
const PROBLEM_SERVICE_API_URL = PROBLEM_SERVICE_URL + '/api/v1/problem';

async function fetchProblemDetails(problemId){
    try{
        const URL = `${PROBLEM_SERVICE_API_URL}/${problemId}`;
        const response = await axios.get(URL);
        return response;
    }
    catch(err){
        console.log("Some Error Occured!");
        console.log(err);
        return {};
    }
};

module.exports = fetchProblemDetails;