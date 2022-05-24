let str1 = "W3Schools";
let text1 = "";
for(const item of str1){
    text1 += item + "<br>";
}
document.getElementById("ex1").innerHTML = text1;

let myArray2 = ["a", "b", "c"];
let text2 = "";
for(let item of myArray2){
    text2 += item + "<br>";
}
document.getElementById("ex2").innerHTML = text2;

let text3 = "";
let letters = new Set(["a", "b", "c"]);
for(let item of letters){
    text3 += item + "<br>";
}
document.getElementById("ex3").innerHTML = text3;