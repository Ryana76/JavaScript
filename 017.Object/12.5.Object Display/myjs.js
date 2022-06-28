const person1 = {
    name1: "John",
    age1: 30,
    city1: "New York"
};
document.getElementById("ex1").innerHTML = person1;

document.getElementById("ex2").innerHTML = 
person1.name1 + " " + person1.age1 + ", " + person1.city1;

let text3 = "";
for (const key in person1) {
    text3 += person1[key] + " ";
}
document.getElementById("ex3").innerHTML = text3;

const myArray4 = Object.values(person1);
document.getElementById("ex4").innerHTML = myArray4;

let myString5 = JSON.stringify(person1);
document.getElementById("ex5").innerHTML = myString5;

const person6 = {
    name6: "Aryana",
    today: new Date()
}
let myString6 = JSON.stringify(person6);
document.getElementById("ex6").innerHTML = myString6;


const person7 = {
    name: "Aryana",
    age: function() {return 25;}
};
document.getElementById("ex7").innerHTML = JSON.stringify(person7);

const person8 = {
    name: "Aryana",
    age: function() {return 25;}
};

person8.age =person8.age.toString();

document.getElementById("ex8").innerHTML = JSON.stringify(person8);

const arr9 = ["John", "Peter", "Sally", "Jane"];
let myString9 = JSON.stringify(arr9);
document.getElementById("ex8").innerHTML = myString9;
