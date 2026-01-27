const {ItemAlreadyExistError, SearchItemNotExistError, DeleteItemNotExistError, NoItemStoredError} = require('./../error/item-error');

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
        else throw new ItemAlreadyExistError();
    }
}

function showAll(req,res,next){
    try{
        if(_nullMapVerifier()) res.status(201).json({work : true, data : Object.fromEntries(itemsMap)});
        else throw new NoItemStoredError();
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
    else throw new SearchItemNotExistError();
}

function itemDelete(req, res, next){
    try{
        _excludeItem(req.validatedParams.item);
        res.status(201).json({work:true, data : `${req.params.item} removed`});
    }
    catch (err){
        next(err);
    }
}

function _excludeItem(item){
    if(itemsMap.has(item)) itemsMap.delete(item);
    else throw new DeleteItemNotExistError();
}

module.exports = {itemAdd, showAll, searchItem, itemDelete};