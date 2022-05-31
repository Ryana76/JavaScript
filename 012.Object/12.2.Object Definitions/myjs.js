const person1 = {
    firstName1: "Aryana",
    lastName1: "Najafi",
    age1: 25,
    eyeColor1: "black"
};
document.getElementById("ex1").innerHTML = person1.firstName1;




const person2 = {};
person2.lastName2 = "Najafi";
person2.firstName2 = "Aryana";
person2.eyeColor2 = "black";
person2.age2 = 25;
document.getElementById("ex2").innerHTML = person2.lastName2;


const person3 = new Object();
person3.lastName3 = "Najafi";
person3.firstName3 = "Aryana";
person3.eyeColor3 = "black";
person3.age3 = 25;
document.getElementById("ex3").innerHTML = person3.age3;



const person4 = {
    firstName4: "Aryana",
    lastName4: "Najafi",
    age4: 25,
    eyeColor4: "black"
};
const x = person4;
x.age4 = 24;
document.getElementById("ex4").innerHTML = person4.age4;

