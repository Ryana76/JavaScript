let myFunction = (a, b) => a*b;
document.getElementById("ex1").innerHTML = myFunction(2, 3);



var hello2;
hello2 = function(){
    return "Hello World!2";
}
document.getElementById("ex2").innerHTML = hello2();



var hello3;
hello3 = () => {
    return "Hello World!3";
}
document.getElementById("ex3").innerHTML = hello3();



var hello4;
hello4 = () => "Hello World!4";
document.getElementById("ex4").innerHTML = hello4();



var hello5 = (val5) => "Hello " + val5;
document.getElementById("ex5").innerHTML = hello5("World!5");



var hello6 = val6 => "Hello " + val6;
document.getElementById("ex6").innerHTML = hello6("World!6");



var hello7 = function(){
    document.getElementById("ex7").innerHTML += this;
}
window.addEventListener("load", hello7);
document.getElementById("btn7").addEventListener("click", hello7);



var hello8 = () => {document.getElementById("ex8").innerHTML += this;}
window.addEventListener("load", hello8);
document.getElementById("btn8").addEventListener("click", hello8);

