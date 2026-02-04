const {z} = require('zod');
const {SignUpValidatorError} = require('../error-handler/sign-up-error');

const _signUpSchematic = z.object({
    username : z.coerce.string().min(1),
    email : z.email(),
    password : z.coerce.string().min(1)
});

function signUpValidator(req,res,next){
    try{
        const result = _signUpSchematic.safeParse(req.body);

        if(!result.success) {
            const field = result.error.issues[0].path.join(', ');
            throw new SignUpValidatorError(field);
        }

        req.validatedBody = result.data;

        next();
    }
    catch(err){
        next(err);
    }
}

module.exports = signUpValidator;