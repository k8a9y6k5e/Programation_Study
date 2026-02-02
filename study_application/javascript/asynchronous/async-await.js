//async and await are syntax sugar of promise and then

//async - transform the return of a function into a promise

async function doble(num){
    return num * 2;
}

//same as:
// function doble(num){ return new Promise((resolve, reject) => resolve(num*2)); }

//works equals a promise
doble(2).then(console.log);

//await - make the code wait until the promise settles and return the result

async function triple(num){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num*3), 3000);
    });

    let equals = await promise;

    console.log(equals)
}

triple(2);

//await accept either thenables functions or class methods

//error handling - the error hancle in async functions works as normals error handlers
