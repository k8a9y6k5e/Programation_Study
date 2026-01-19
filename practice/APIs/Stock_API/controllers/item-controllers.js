const itemsMap = new Map();

function itemAdd(req, res, next){
    try{
        _itemSave(Object.entries(req.body));

        res.status(201).json({work : true, data : [...itemsMap.keys()]})
    }
    catch(err){
        next(err);
    }
}

function _itemSave(entries){
    for(let item of entries){
        let key = item[0];
        let value = item[1]
        if(!(itemsMap.has(key))) itemsMap.set(key, value);
        else throw new Error('item already exist');
    }
}

module.exports = itemAdd;