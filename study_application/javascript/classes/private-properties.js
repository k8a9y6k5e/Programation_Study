//a way to delimeite properties from a class to use just intern not extern

class Bank {
    contructor(name){
        this._name = name;
    }

    //to protect values, it's used "_" to represent it
    get money(){
        return this._money;
    }

    set money(quantity){
        if (quantity < 0) this._money = 0;
        else this._money = this.#limitVerifier(quantity);
    }

    //to readOnly value it's used the "_" and just one get
    get name(){
        return this._name;
    }

    //to use private properties, it's used "#" at start, and it don't are accessible in no one other local
    #limit = 2000;

    #limitVerifier(money){
        if (money > this.#limit) return this.#limit;
        else return money;
    }
}


const myBank = new Bank('Cibs');

// myBank.#limit
//give an error try to access the private values

myBank.money = 1900;
console.log(myBank.money);