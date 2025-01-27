const baseError = require( "./base.error" );
const { StatusCodes } = require('http-status-codes');

class internalServerError extends baseError{
    constructor(description, details){
        super("Inernal Server Error", StatusCodes.INTERNAL_SERVER_ERROR, description, details);
    }
}

module.exports = internalServerError;