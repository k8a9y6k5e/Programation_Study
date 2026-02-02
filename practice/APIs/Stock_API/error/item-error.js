const {BaseError} = require('./error-handler');

class ItemAlreadyExistError extends BaseError{
    constructor(){
        super("item already exist", 409);
    }
}

class SearchItemNotExistError extends BaseError{
    constructor(){
        super("item not exist", 400);
    }
}

class NullSearchValueError extends BaseError{
    constructor(){
        super("value to search can't be empty", 400)
    }
}

class DeleteValueError extends BaseError{
    constructor(){
        super("value to delete can't be null", 400);
    }
}

class NoItemStoredError extends BaseError{
    constructor(){
        super("no items stored yet", 200);
    }
}

class DeleteItemNotExistError extends BaseError{
    constructor(){
        super("item not exist" , 409);
    }
}

class InvalidValueFormatError extends BaseError{
    constructor(invalidValues){
        super(`ìnvalid format value in ${invalidValues}`, 400);
    }
}

class UpdatePutValidatorError extends BaseError{
    constructor(){
        super("invalid value to update", 400);
    }
}

class UpdateError extends BaseError{
    constructor(item){
        super(`${item} isn't found`, 400);
    }
}

class UpdatePatchValidatorError extends BaseError{
    constructor(){
        super("invalid value to update", 400);
    }
}

module.exports = {ItemAlreadyExistError, SearchItemNotExistError, NullSearchValueError,
    DeleteValueError, NoItemStoredError, DeleteItemNotExistError, InvalidValueFormatError,
    UpdatePutValidatorError, UpdateError, UpdatePatchValidatorError};