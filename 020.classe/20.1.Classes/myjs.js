class Car {
    constructor(nameCar, yearCar){
        this.nameCar = nameCar;
        this.yearCar = yearCar;
    }
    age(year){
        return year - this.yearCar;
    }
}
let myCar1 = new Car("Volvo", 1997);
let myCar2 = new Car("BMW", 1995);
let date = new Date;
let year = date.getFullYear();
document.getElementById("demo").innerHTML=
myCar1.nameCar + " " + myCar1.yearCar + " have :" + myCar1.age(year) +
"<br>" +
myCar2.nameCar + " " + myCar2.yearCar  + " have :" + myCar2.age(year);