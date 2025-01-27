const baseError = require( "./base.error" );
const { StatusCodes } = require('http-status-codes');

class badRequest extends baseError{
    constructor(propertyName, details){
        super("Bad Request", StatusCodes.BAD_REQUEST, `Invalid Structure for ${propertyName} Provided`, details);
    }
}

module.exports = badRequest;