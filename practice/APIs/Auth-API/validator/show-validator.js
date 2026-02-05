const {z} = require('zod');
const {InvalidTokenFormatError} = require('../error-handler/show-error');

const _JWTSchematic = z.jwt();

function showHeaderValidator(req,res,next){
    try{
        const result = _JWTSchematic.safeParse(req.headers.authorization);

        if(!result.success) throw new InvalidTokenFormatError();

        req.vauth.token = result.data;

        next();
    }
    catch(err){next(err);}
}

module.exports = showHeaderValidator;