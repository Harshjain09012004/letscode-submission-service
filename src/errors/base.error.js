class baseError extends Error{
    constructor(name, statusCode, description, details){
        super(description);
        this.name = name; 
        this.details = details;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}

module.exports = baseError;