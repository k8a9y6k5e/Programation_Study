const {BaseError} = require('./error-handler');

class InvalidTokenError extends BaseError{
    constructor(){super('invalid token enter', 401);}
}

class InvalidTokenFormatError extends BaseError{
    constructor(){super('invlid format of token', 400);}
}

module.exports = {InvalidTokenError, InvalidTokenFormatError};