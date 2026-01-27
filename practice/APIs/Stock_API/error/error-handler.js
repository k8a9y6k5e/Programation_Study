const {z} = require('zod');

function errorHandler(err, req, res, next){
    res.status(err.statusCode).json({work : false, error : err.message})
}

function _statusCodeIdentifier(err){
    switch (err.message){
        case "no items stored yet":
            return 200;
        case "item not exist":
            return 404;
        default:
            switch(true){
                case err.message.includes('code'):
                case err.message.includes('quantity'):
                case err.message.includes('price'):
                    return 400;
            }
            return 500;
    }
}

const _statusCodeSchematic = z.number();

class ItemError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }

    _statusCode = 500;

    get statusCode(){
        return this._statusCode;
    }

    set statusCode(value){
        try{
            const result = _statusCodeSchematic.safeParse(value);
            
            if(!result.success) throw new Error();//server error
            
            this._statusCode = value;
        }  
        catch (err){
            //add a server error
        }
    }
}

//create server errors
//create validator errors

module.exports = {errorHandler, ItemError};