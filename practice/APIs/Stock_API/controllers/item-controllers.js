const itemsMap = new Map();

function itemAdd(req, res, next){
    try{
        _itemSave(Object.entries(req.validatedBody));

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

function showAll(req,res,next){
    try{
        if(_nullMapVerifier()) res.status(201).json({work : true, data : Object.fromEntries(itemsMap)});
        else throw new Error('no items stored yet');
    }
    catch (err){
        next(err);
    }
}

function _nullMapVerifier(){
    if(itemsMap.size != 0) return true;
    else return false;
}

function searchItem(req, res ,next){
    try{
        const result = _search(req.validatedQuery.search);
        res.status(201).json({work:true, data : result});
    }
    catch(err){
        next(err);
    }
}

function _search(valueToFind){
    if(itemsMap.has(valueToFind)){
        return [valueToFind, itemsMap.get(valueToFind)];
    }
    else throw new Error('value not exist');
}

module.exports = {itemAdd, showAll, searchItem};