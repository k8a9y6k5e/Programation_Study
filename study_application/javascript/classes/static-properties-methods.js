//static is a syntax to make a method for class as a whole

class Delivery {
    constructor(location, status){
        this.location = location;
        this.status = status;
    }

    //static funcions just work inside the class
    static showLocalization(){
        console.log(this.location);
    }

    static showStatus(){
        console.log(this.status);
    }

    //because this, to use it in an object, we need to call the class, and, if need, aplly the own this(of object)
    showInformations(){
        Delivery.showLocalization.call(this);
        Delivery.showStatus.call(this);
    }

    //can be used as multiple way of class creation
    static newDelivery(localization) {
        return new this(localization, 'preparing order').showInformations();
    }

    //can also has static properties
    static deliveryApp = 'DoorDash';
}

const myDelivery = new Delivery('Elm Street, 026', 'preparing');

myDelivery.showInformations();

//the static it's used when the class need a function, which the object don't need

Delivery.newDelivery('Elm Street, 026');

console.log(Delivery.deliveryApp);

//the static fields can has inheritance

class OtherDelivery extends Delivery{}

OtherDelivery.newDelivery('Elm Street, 025');

OtherDelivery.showLocalization.call(this);