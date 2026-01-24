//mixin is a class of functions which don't need the inheritance to other classes use 

class Car {
    constructor(brand){
        this.brand = brand;
    }
}

const CarMixin = {//the mixin, need to be an object
    gas(){
        console.log('vroom');
    },
    turn(side){
        console.log(`turning to ${side}`);
    }
}

Object.assign(Car.prototype, CarMixin);//to conect the mixin with the class

new Car('aston martin').turn('left');