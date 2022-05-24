const carArray1 = ["BMW", "Volvo", "Mini"];
let text1 = "";
for(let index of carArray1){
    text1 += index + ", ";
}
document.getElementById("ex1").innerHTML = text1;


const language2 = "JavaScript";
let text2 = "";
for(let index of language2){
    text2 += index + "<br>";
}
document.getElementById("ex2").innerHTML = text2;