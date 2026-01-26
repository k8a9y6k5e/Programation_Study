//used when the code need a special own error

class NewError extends Error{//to create the custom error
    constructor(message, statusCode){
        super(message);
        this.name = this.constructor.name;//this make the name have the class name
        this.statusCode = statusCode;
    }
    //now, the creation and values are differente, but also can be changed in other ways
}

try{
    throw new NewError('an error ocurs', 200)
}
catch(err){
    console.log(JSON.stringify({
        message : err.message,
        name : err.name,
        statusCode : err.statusCode
    }));
}

//the creation of custom errors can be made with an type of errors

