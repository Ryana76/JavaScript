class Car{
    constructor(brand){
        this.brand = brand;
    }
    present() {
        return 'I have ' + this.brand;
    }
}
class modello extends Car{
    constructor(brand, modello){
        super(brand);
        this.modello = modello;
    }
    show(){
        return this.present() + ', Modello: ' + this.modello;
    }
}
let myCar = new modello("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

class Car2{
    constructor(carName2){
        this.carName2 = carName2;
    }
    get cname2(){
        return this.carName2;
    }
    set cname2(carName2){
        this.carName2 = carName2;
    }
}
let myCar2 = new Car2("Ford");
document.getElementById("demo2").innerHTML = myCar2.carName2;



class Car3{
    constructor(carName3){
        this._carName3 = carName3;
    }
    get cname3(){
        return this._carName3;
    }
    set cname3(carName3){
        this._carName3 = carName3;
    }
}
let myCar3 = new Car3("Ford, Mustang");
document.getElementById("demo2").innerHTML = myCar3.cname3;


