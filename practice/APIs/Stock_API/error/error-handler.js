function errorHandler(err, req, res, next){
    console.log(err.stack);

    const statusCode = _statusCodeIdentifier(err);

    res.status(statusCode).json({work : false, error : err.message})
}

function _statusCodeIdentifier(err){
    switch (err.message){
        case "item already exist":
            return 409;
        case "keys can't be empty":
        case "value not exist":
        case "value to search can't be empty":
            return 400;
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

module.exports = errorHandler;