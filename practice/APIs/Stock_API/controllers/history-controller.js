const ClearHistoryError = require('./../error/history-error');

const movementSet = new Set();

function logMovement(req, res, next){
    try{
        const movement = { 
            type : req.url.slice(1, req.url.length),
            where : Object.keys(req.body) || req.query.search || req.params.item || null,
            method : req.method,
            date : new Date().toLocaleString()
        }

        _saveLog(movement);

        next();
    }
    catch(err){
        next(err);
    }
}

function _saveLog(movementObj){
    movementSet.add(movementObj);
}


function showHistory(req, res, next){
    try{
        const result = _getHistory();

        res.status(200).json({work:true, data:result});
    }
    catch(err){
        next(err);
    }
}

function _getHistory(){
    if(movementSet.size == 0) throw new ClearHistoryError();

    return movementSet.keys();
}

module.exports = {logMovement,showHistory};