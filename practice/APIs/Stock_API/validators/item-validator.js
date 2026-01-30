const {z} = require('zod');
const {NullSearchValueError, DeleteValueError, InvalidValueFormatError,
    UpdatePutValidatorError, UpdatePatchValidatorError} = require('./../error/item-error');


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

const _paramDeleteSchematic = z.object({
    item : z.coerce.string().trim().min(1)
});

function deleteValidator(req, res, next){
    try{
        const result = _paramDeleteSchematic.safeParse(req.params);

        if(!result.success) throw new DeleteValueError();

        req.validatedParams = result.data;

        next();
    }
    catch (err){
        next(err);
    }
}

const _updatePutSchematic = z.object({
    quantity : z.coerce.number().nonnegative(),
    price : z.coerce.number().nonnegative()
});

const _paramUpdateSchematic = z.object({
    toChange : z.coerce.string().trim().min(1)
});

function updatePutValidator(req,res,next){
    try{
        const resultBody = _updatePutSchematic.safeParse(req.body);

        const resultParams = _paramUpdateSchematic.safeParse(req.params);

        if(!resultBody.success && !resultParams.success) throw new UpdatePutValidatorError();

        req.validatedBody = resultBody.data;

        req.validatedParams = resultParams.data;

        next();
    }
    catch(err){
        next(err);
    }
}

const _updatePatchSchematic = _updatePutSchematic.partial();

function updatePatchValidator(req,res,next){
    try{
        const resultBody = _updatePatchSchematic.safeParse(req.body);

        const resultParams = _paramUpdateSchematic.safeParse(req.params);

        if(!resultBody.success || !resultParams.success) throw new UpdatePatchValidatorError();

        req.validatedBody = resultBody.data;

        req.validatedParams = resultParams.data;

        next();
    }
    catch(err){
        next(err);
    }
}

module.exports = {itemValidator, searchValidator, deleteValidator, updatePutValidator, updatePatchValidator};