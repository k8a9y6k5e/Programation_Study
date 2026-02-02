const {BaseError} = require('./error-handler');

class ClearHistoryError extends BaseError{
    constructor(){
        super('don\'t have a history saved yet', 200);
    }
}

module.exports = ClearHistoryError;