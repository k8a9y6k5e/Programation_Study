//export is a keyword to pass function to outside from the script

//to export once thing
export function name(name){
    console.log(`hello, my name is ${name}!`);
};

//to export more than one script

function sum(a,b) {return a+b;}

function sub(a,b) {return a-b;}

export {sum, sub};