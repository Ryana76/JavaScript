const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsToString = fruits.toString();
document.getElementById("demo1").innerHTML = fruitsToString;



let fruitsJoin = fruits.join(" * ");
document.getElementById("demo2").innerHTML = fruitsJoin;


let fruitsPop = fruits.pop();
fruits.push("kiwi");
document.getElementById("demo3").innerHTML = 
fruitsPop + "<br>" + fruits;


let fruitsShift = fruits.shift();
document.getElementById("demo4").innerHTML = 
fruits + "<br>" +fruitsShift;


fruits.unshift("Lemon");
document.getElementById("demo5").innerHTML = 
fruits.unshift("banana") + "<br>" + fruits;


delete fruits[3];
document.getElementById("demo6").innerHTML = 
fruits + "<br>" + fruits.length + "<br>" + fruits[3];


const myName = ["Aryana", "Arya", "Mehran"]
let newFruits = fruits.concat(myName);
document.getElementById("demo7").innerHTML = 
newFruits;


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2,arr3,"Aryana").join(" * ");
document.getElementById("demo8").innerHTML = myChildren; 



const myName2 = ["banana","Lemon","Orange","kiwi","Aryana","Arya","Mehran"]
myName2.splice(0, 4, "Fruits: ", "Nmaes: " )
document.getElementById("demo9").innerHTML = 
myName2 + "<br>" + myName2.length; 


const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.splice(2,1);
document.getElementById("demo10").innerHTML = fruits10

