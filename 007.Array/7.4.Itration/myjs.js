const numbers1 = [45, 4, 9, 16, 25];
let text = "";
numbers1.forEach(myFunction);
document.getElementById("demo1").innerHTML = text;
function myFunction(value){
    text += value + "<br>";
}


const numbers2 = [45, 4, 9, 16, 25];
const numbers3 = numbers2.map(myFunction2);
document.getElementById("demo2").innerHTML = numbers3;
function myFunction2(value){
    return value*2;
}


const numbers4 = [45, 4, 9, 16, 25];
const over18 = numbers4.filter(myFunction3);
document.getElementById("demo3").innerHTML = over18;
function myFunction3(value){
    return value > 18;
}


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Orange") + 1;
document.getElementById("demo4").innerHTML =
"Apple is found in position " + position;
