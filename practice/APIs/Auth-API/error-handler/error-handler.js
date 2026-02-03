const {z} = require('zod');

function errorMiddleWare(req, res, next, err){
    console.log(err.stack);

    res.send(err.statusCode || 500).json({work:false, error : err.message});
}

const _statusCodeSchematic = z.number();

class BaseError extends Error{
    constructor(message, statusCode){
        super();
        this.statusCode = statusCode;
        this.name = this.constructor.name;  
    }

    get statusCode(){return this._statusCode}

    set statusCode(value){
        const result = _statusCodeSchematic.safeParse(value);

        if(!result.success) throw new Error();

        this._statusCode = value;
    }
}

module.exports = {errorMiddleWare, BaseError};