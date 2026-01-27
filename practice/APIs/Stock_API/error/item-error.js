const {ItemError} = require('./error-handler');

class ItemAlreadyExistError extends ItemError{
    constructor(){
        super("item already exist", 409);
    }
}

class SearchItemNotExistError extends ItemError{
    constructor(){
        super("item not exist", 400);
    }
}

class NullSearchValueError extends ItemError{
    constructor(){
        super("value to search can't be empty", 400)
    }
}

class DeleteValueError extends ItemError{
    constructor(){
        super("value to delete can't be null", 400);
    }
}

class NoItemStoredError extends ItemError{
    constructor(){
        super("no items stored yet", 200);
    }
}

class DeleteItemNotExistError extends ItemError{
    constructor(){
        super("item not exist" , 409);
    }
}

class InvalidValueFormatError extends ItemError{
    constructor(invalidValues){
        super(`ìnvalid format value in ${invalidValues}`, 400);
    }
}

module.exports = {ItemAlreadyExistError, SearchItemNotExistError, NullSearchValueError,
    DeleteValueError, NoItemStoredError, DeleteItemNotExistError, InvalidValueFormatError};