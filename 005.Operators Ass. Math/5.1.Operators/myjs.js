let num1 = 5;
let num2 = 2;
let total = num1 + num2;
document.getElementById("ex1").innerHTML = 
    "num1 = " + num1 + ", num2 = " + num2 +
    ", calculate <br> total = num1 + num2 and display total:" +
    "<br><br>" + total;

let total1 = num1 * num2;
document.getElementById("ex2").innerHTML = 
    "num1 = " + num1 + ", num2 = " + num2 +
    ", calculate <br> total = num1 * num2 and display total:" +
    "<br><br>" + total1;
    

let total2 = num1 - num2;
document.getElementById("ex3").innerHTML = 
    "num1 = " + num1 + ", num2 = " + num2 +
    ", calculate <br> total = num1 - num2 and display total:" +
    "<br><br>" + total2;
    

let total3 = num1 / num2;
document.getElementById("ex4").innerHTML = 
    "num1 = " + num1 + ", num2 = " + num2 +
    ", calculate <br> total = num1 / num2 and display total:" +
    "<br><br>" + total3;
    
let text = "What a vary ";
text += "nice day";
document.getElementById("ex5").innerHTML = text;