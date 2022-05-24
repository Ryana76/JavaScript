let text1 = "";
for(let index1 = 0; index1 < 10; index1++){
    if(index1==3){break;}
    text1 += "<br>The number is " + index1;
}
document.getElementById("ex1").innerHTML = text1;

let text2 = "";
for(let index2 = 0; index2 < 10; index2++){
    if(index2 == 3){continue;}
    text2 += "<br>The number is " + index2;
}
document.getElementById("ex2").innerHTML = text2;


let carArray3 = ["BMW", "Volvo", "Saab", "Ford"];
let text3 = "";
list:   {
    text3 += carArray3[0] + "<br>";
    text3 += carArray3[1] + "<br>";
    break list;
    text3 += carArray3[0] + "<br>";
    text3 += carArray3[0] + "<br>";
}
document.getElementById("ex3").innerHTML = text3;