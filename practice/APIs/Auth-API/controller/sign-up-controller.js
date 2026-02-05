const jwt = require('jsonwebtoken');
const {randomUUID} = require('crypto');

function creationAccountController(req,res,next){
    try{
        const id = randomUUID();

        const token = _tokenCreation(req.body, id)

        res.status(201).json({work:true, data:token});
    }
    catch(err){
        next(err);
    }
}

function _tokenCreation(userInformations, id) {
    const payload = {
        username : userInformations.username,
        email : userInformations.email,
        id : id
    }

    const token = jwt.sign(payload, process.env.JWT_secret,{expiresIn : '7d'});

    return token;
}

module.exports = creationAccountController;