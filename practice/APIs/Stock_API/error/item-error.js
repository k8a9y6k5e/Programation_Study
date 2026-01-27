const {ItemError} = require('./error-handler');

class ItemAlreadyExistError extends ItemError{
    constructor(){
        super("item already exist", 409);
    }
}

class NotExistError extends ItemError{
    constructor(){
        super("value not exist", 400);
    }
}

module.exports = {ItemAlreadyExistError, NotExistError};