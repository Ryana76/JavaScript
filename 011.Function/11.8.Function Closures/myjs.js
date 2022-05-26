function myFunction1(){
    let num1 = 5;
    return num1*num1;
}
document.getElementById("ex1").innerHTML = myFunction1();


let num2 = 2;
function myFunction2(){
    return num2*num2;
}
document.getElementById("ex2").innerHTML = myFunction2();



function myFunction3(){
    a = 3;
    return a;
}
document.getElementById("ex3").innerHTML = myFunction3();



let counter4 = 0;
function add4(){
    counter4 += 1;
}
add4();
add4();
add4();
document.getElementById("ex4").innerHTML = counter4;



let counter5 = 0;
function add5(){
    let counter5 = 0;
    counter5 += 1;
}
add5();
add5();
add5();
document.getElementById("ex5").innerHTML = counter5;




function add6(){
    let counter6 = 0;
    counter6 += 1;
    return counter6;
}
add6();
add6();
add6();
document.getElementById("ex6").innerHTML = add6();





function add7(){
    let counter7 = 0;
    counter7 += 1;
    return counter7;
}
function myFunction7(){
    document.getElementById("ex7").innerHTML = add7();
}



document.getElementById("ex8").innerHTML = add8();
function add8(){
    let counter8 = 0;
    function plus8(){ counter8 += 1; }
    plus8()
    return counter8;
}




const add9 = (function(){
    let counter9 = 0;
    return function(){counter9 += 1; return counter9};
})();
function myFunction9(){
    document.getElementById("ex9").innerHTML = add9();
}

