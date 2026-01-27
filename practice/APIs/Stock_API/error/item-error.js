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

class NullSearchValueError extends ItemError{
    constructor(){
        super("value to search can't be empty", 400)
    }
}

class NullDeleteValueError extends ItemError{
    constructor(){
        super("value to delete can't be null", 400);
    }
}

module.exports = {ItemAlreadyExistError, NotExistError, NullSearchValueError,
    NullDeleteValueError
};