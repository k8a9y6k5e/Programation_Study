//any value/data type can be exported

function multiple(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

export {multiple, division};


export function dobleCalculation(num){return num*2;}


//us can export whe data types with other names

function tripleCalculation(num) {return num*3;}

export {tripleCalculation as triple};


//it's used the command default to export a single entity
//with the default command, it's possible to pass the data types without passing the name of it

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}

export default Car;

