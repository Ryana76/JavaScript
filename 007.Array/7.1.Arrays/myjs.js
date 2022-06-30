const cars = ["BMV","Volvo","Saab"];
document.getElementById("demo1").innerHTML = cars;

const cars2 = ["BMW","Volvo","Ferrari"];
document.getElementById("demo2").innerHTML = cars2;

const cars3 = [
    "BMW",
    "Fwrrari",
    "BMV"
];
document.getElementById("demo3").innerHTML = cars3;

const cars4 = [];
cars4[0] = "Volvo";
cars4[1] = "BMW";
cars4[2] = "Ferrari";
document.getElementById("demo4").innerHTML = cars4;

const cars5 = new Array("BMV","Volvo","Saab");
document.getElementById("demo5").innerHTML = cars5;

const cars6 = ["BMW","Volvo","Ferrari"];
document.getElementById("demo6").innerHTML = cars6[0];

const cars7 = ["1","2","3"];
cars7[0] = "4";
document.getElementById("demo7").innerHTML = cars7;



const personArr = ["Aryana", "Najafi", 25];
const personObj = {firstName: "Aryana", lastName: "Najafi", age: 25};
document.getElementById("demo8").innerHTML = 
"array name whit numberkey : " + personArr[0] + "<br>" +
"object name whit nameKey : " + personObj.firstName;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
document.getElementById("demo9").innerHTML = length;

let firstElement = fruits[0];
let lastElement = fruits[fruits.length - 1];
document.getElementById("demo10").innerHTML = 
firstElement + "<br>" + lastElement;


let text = "<ul>";
for(let index = 0; index<fruits.length; index++){
    text += "<li>" + fruits[index] + "</li>";
}
text += "</ul>";
document.getElementById("demo11").innerHTML = text;



let text2 = "<ul>";
// fruits.forEach(myFunction)
fruits.forEach(element => {
    text2 += "<li>" + element + "</li>"
});
text += "</ul>";
// function myFunction(value){
//     text2 += "<li>" + value + "</li>"
// }
document.getElementById("demo12").innerHTML = text2;


document.getElementById("demo13").innerHTML = fruits;    
function myFunction(){
    fruits.push("lemon");
    document.getElementById("demo13").innerHTML = fruits;    
}


const arrayProvoNew = new Array(5);
const arrayProvo = [5];
document.getElementById("demo14").innerHTML = arrayProvo + "<br>" + arrayProvoNew;    

