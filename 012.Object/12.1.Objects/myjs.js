let car1 = "Fiat";
document.getElementById("ex1").innerHTML = car1;


// let car2 = {
//     type2: "Fiat",
//     model2: "500",
//     color2: "white"
// };
const car2 = {
    type2: "Fiat",
    model2: "500",
    color2: "white"
};
document.getElementById("ex2").innerHTML =
"The car Type is " + car2.type2;


const person3 = {
    firstName3: "Aryana",
    lastName3: "Najafi",
    age3: 24,
    eyeColor3: "black"
};
document.getElementById("ex3").innerHTML =
person3.firstName3 + " is " + person3.age3 + " years old.";



const person4 = {
    firstName4: "Aryana",
    lastName4: "Najafi",
    age4: 24,
    eyeColor4: "black"
};
document.getElementById("ex4").innerHTML =
person4["firstName4"] + " " + person4["lastName4"];



const person5 = {
    firstName5: "Aryana",
    lastName5: "Najafi",
    id5: 1212,
    fullName5: function(){
        return this.firstName5 + " " + this.lastName5;
    }
}
document.getElementById("ex5").innerHTML = person5.fullName5();
document.getElementById("ex6").innerHTML = person5.fullName5;