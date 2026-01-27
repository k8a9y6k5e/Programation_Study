const {z} = require('zod');
const {NullSearchValueError, NullDeleteValueError, InvalidValueFormatError} = require('./../error/item-error');


function itemValidator(req, res, next){
    try{
        req.validatedBody = _itemValidator(req.body);

        next();
    }
    catch(err){
        next(err);
    }
}

const _itemSchematic = z.record(z.string(), z.object({
    code: z.coerce.string().length(6),
    quantity: z.coerce.number().nonnegative(),
    price : z.coerce.number().nonnegative()
}));

function _itemValidator(requestBody){
    let result = _itemSchematic.safeParse(requestBody);

    if(!result.success) {
        const fieldName = result.error.issues[0].path.join(', ');
        throw new InvalidValueFormatError(fieldName);
    }

    return result.data;
}

const _searchSchematic = z.object({
    search : z.string().trim().min(1)
})

function searchValidator(req,res,next){
    try{
        const result = _searchSchematic.safeParse(req.query);

        if(!result.success) throw new NullSearchValueError();
        
        req.validatedQuery = result.data;

        next();
    }
    catch (err){
        next(err);
    }
}

const _deleteSchematic = z.object({
    item : z.string().trim().min(1)
});

function deleteValidator(req, res, next){
    try{
        const result = _deleteSchematic.safeParse(req.params);

        if(!result.success) throw new NullDeleteValueError();

        req.validatedParams = result.data;

        next();
    }
    catch (err){
        next(err);
    }
}

module.exports = {itemValidator, searchValidator, deleteValidator};