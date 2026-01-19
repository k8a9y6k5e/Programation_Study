function errorHandler(err, req, res, next){
    console.log(err.stack);

    const statusCode = _statusCodeIdentifier(err);

    res.status(statusCode).json({work : false, error : err.message})
}

function _statusCodeIdentifier(err){
    switch (err.message){
        case 'item already exist':
            return 409;
        default:
            return 500;
    }
}

module.exports = errorHandler;