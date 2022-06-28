const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);
document.getElementById("ex1").innerHTML = fruits1.get("apples");



const fruits2 = new Map();
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
document.getElementById("ex2").innerHTML = fruits2.get("apples");



fruits2.set("apples", 100);
document.getElementById("ex3").innerHTML = fruits2.get("apples");

document.getElementById("ex4").innerHTML = fruits2.size;


fruits2.delete("bananas");
document.getElementById("ex5").innerHTML = fruits2.size;



document.getElementById("ex6").innerHTML = fruits2.size;
function myFunction6(){
    fruits2.clear();
    document.getElementById("ex6").innerHTML = fruits2.size;
}




document.getElementById("ex7").innerHTML = fruits1.has("bananas")+ 
"<br>" + fruits2.has("bananas");



let text8 = "";
fruits1.forEach((value, key) => {
    text8 += key + " = " + value + "<br>";
});
document.getElementById("ex8").innerHTML = text8;



let text9 = "";
for(const key of fruits1.entries()){
    text9 += key + "<br>";
}
document.getElementById("ex9").innerHTML = text9;


let text10 = "";
for(const key of fruits1.keys()){
    text10 += key + "<br>";
}
document.getElementById("ex10").innerHTML = text10;


let total11 = 0;
for(const key of fruits1.values()){
    total11 += key;
}
document.getElementById("ex11").innerHTML = total11;



const apples = {name: "apples"};
const bananas = {name: "bananas"};
const oranges = {name: "oranges"};

const fruits3 = new Map();
fruits3.set(apples, 200);
fruits3.set(bananas, 500);
fruits3.set(oranges, 300);


document.getElementById("ex11").innerHTML = fruits3.get(apples);
