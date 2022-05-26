let function1 = function (num1, num2){return num1*num2};
document.getElementById("ex1").innerHTML = function1;

let function2 = function1(3,4);
document.getElementById("ex2").innerHTML = function2;

const myFunction = new Function("a", "b", "return a * b");
let text = myFunction(4,5);
document.getElementById("ex3").innerHTML = text;

(function(){
    document.getElementById("ex4").innerHTML = "Hello!";
})();

function myFunction5(a,b){
    return arguments.length;
}
document.getElementById("ex5").innerHTML = myFunction5(2,5); 

const num6_1 = (num6_2, num6_3) => num6_2*num6_3;
document.getElementById("ex6").innerHTML = num6_1(5,5); 

const num7_1 = (num7_2, num7_3) => num7_2*num7_3;
document.getElementById("ex7").innerHTML = num7_1(5,5); 