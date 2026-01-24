//to verify if an object belongs a class
//return a boolean if the object is or don't a belong of a class 

class Car{
    constructor(brand) {
        this.brand = brand;
    }

    gas(){
        console.log('vroom');
    }
}

const mclaren = new Car('mclaren');

console.log(mclaren instanceof Car);

//instanceof examine the prototype chain to check

console.log(new Array instanceof Object);
console.log(new Array instanceof Array);