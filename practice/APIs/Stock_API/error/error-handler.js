const {z} = require('zod');

function errorHandler(err, req, res, next){
    console.log(err.stack);

    res.status(err.statusCode || 500).json({work : false, error : err.message})
}

const _statusCodeSchematic = z.number();

class ItemError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }

    _statusCode = undefined;

    get statusCode(){
        return this._statusCode;
    }

    set statusCode(value){
        const result = _statusCodeSchematic.safeParse(value);
        
        if(!result.success) throw new Error();//server error
        
        this._statusCode = value;
    }
}

module.exports = {errorHandler, ItemError};