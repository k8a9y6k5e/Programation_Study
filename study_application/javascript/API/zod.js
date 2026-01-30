//validation

const express = require('express');
const {z:zod} = require('zod');

const app = express();
//zod is a library focused in validation of values in a program

//to use zod to validate, us call the function like this
const User = zod.object({//this variable turns into a validator, to validate value us use it
    //here is puted the laws to validate a value
    username: zod.string(),
    age: zod.coerce.number().min(18).max(80)
    //coerce - make all values in incorrect type have the correct type
});

//to use the validator
User.parse({username: "Cibs", age: 19});
//if values passed don't are in these specific laws, give an error


//it's used to correct the values
app.post('/validation/zod', (req,res, next)=>{
    //making this, allow to a safe request, deleting the unecessary values, and making the necessary value in a correct format/type
    const Car = zod.object({
        brand : zod.string().trim().min(1),
        model : zod.string().trim().min(1),
        chassi : zod.coerce.number().min(5)
    });

    const result = Car.safeParse(req.body);//verify without making an error

    if(!result.success){
        return res.status(400).json({error : result.error.format()});
        //to call/pass the error its used this command("<safeParseValue>.error.format()")
    }

    req.valid = result.data;//transform the body in a new body, with verified values

    next();
}, (req, res)=>{res.json(req.valid);});

app.listen(3000);