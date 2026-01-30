const movementSet = new Set();

function logMovement(req, res, next){
    try{
        const movement = { 
            type : req.url.slice(1, req.url.length()),
            where : Object.keys(req.body) || req.query.search || req.params.item || null,
            method : req.method,
            date : Date.now()
        }

        _log(movement);

        next();
    }
    catch(err){
        next(err);
    }
}

function _saveLog(movementObj){
    movementSet.add(movementObj);
}

module.exports = {logMovement};