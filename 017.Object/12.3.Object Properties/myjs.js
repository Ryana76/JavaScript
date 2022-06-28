const person1 = {
    firstName1: "Aryana",
    lastName1: "Najafi",
    age1: 25,
}
person1.nationality = "Persian";
delete person1.age1;
var text = "";
for (const key in person1) {
    text += person1[key] + " ";
}
document.getElementById("ex1").innerHTML = text;


// const myObject2 = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "fiat",
//         car2: "BMW",
//         car3: "Ford"
//     }
// };
// document.getElementById("ex2").innerHTML = myObject2.cars.car2;


const myObject2 = {
    name: "John",
    age: 30,
    cars: [
        {name: "Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models:["320", "X3", "X5"]},
        {name: "Fiat", models:["500", "Panda"]}
    ]
};
let text2 = "";
for (const key1 in myObject2.cars) {
    text2 += "<h3>" + myObject2.cars[key1].name + "</h3>" ;
    for (const key2 in myObject2.cars[key1].models) {
        text2 += myObject2.cars[key1].models[key2] + "<br>" ;
    }
}
document.getElementById("ex2").innerHTML = text2;
