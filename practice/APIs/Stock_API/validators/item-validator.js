const {z} = require('zod');


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
        throw new Error(`ìnvalid format value in ${fieldName}`);
    }

    return result.data;
}

const _searchSchematic = z.object({
    search : z.string().trim().min(1)
})

function searchValidator(req,res,next){
    try{
        const result = _searchSchematic.safeParse(req.query);

        if(!result.success) throw new Error("value to search can't be empty");
        
        req.validatedQuery = result.data;

        next();
    }
    catch (err){
        next(err);
    }
}

module.exports = {itemValidator, searchValidator};