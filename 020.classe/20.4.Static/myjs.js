class Car{
    constructor(carName){
        this._carName = carName;
    }
    static message(myCar){
        return "My car is: " + myCar._carName;
    }
}
let myCar = new Car("Mustang");
document.getElementById("demo").innerHTML = Car.message(myCar)