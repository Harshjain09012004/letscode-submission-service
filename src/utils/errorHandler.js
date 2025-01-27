const fastifyPlugin = require('fastify-plugin');
const baseError = require('../errors/base.error');
const { StatusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next){
    console.log(err)
    if(err instanceof baseError){
        return res.status(err.statusCode).send({
            success : false,
            message : err.message,
            details : err.details,
            data : {}
        });
    }

    else{
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success : false,
            message : "Unkown Error Occured",
            details : err,
            data : {}
        });
    }
}

module.exports = fastifyPlugin(errorHandler);