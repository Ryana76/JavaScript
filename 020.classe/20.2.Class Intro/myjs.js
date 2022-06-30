class Car {
    constructor(nameCar, yearCar){
        this.nameCar = nameCar;
        this.yearCar = yearCar;
    }
    age(thisYear){
        return thisYear - this.yearCar;
    }
}
let myCar1 =  new Car("Volvo", 1999);
let myCar2 =  new Car("Benz", 1900);
let date = new Date();
let thistYear = date.getFullYear();
document.getElementById("demo1").innerHTML=
myCar1.nameCar + " " + myCar1.yearCar + " have: " + myCar1.age(thistYear) +
 "<br>" +
myCar2.nameCar + " " + myCar2.yearCar +  " have: " + myCar2.age(thistYear);