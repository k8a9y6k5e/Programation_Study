const {z} = require('zod');

const _signUpSchematic = z.object({
    username : z.coerce.string().min(1),
    email : z.email(),
    password : z.coerce.string().min(1)
});

function signUpValidator(req,res,next){
    try{
        const result = _signUpSchematic.safeParse(req.body);

        if(!result.success) throw new Error();

        req.validatedBody = result.data;

        next();
    }
    catch(err){
        next(err);
    }
}