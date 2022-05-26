function myFunction1(x, y){
    if(y === undefined){
        y = 2;
    }
    return x*y;
}
document.getElementById("ex1").innerHTML = myFunction1(5);


function myFunction2(x, y=2){
    return x * y;
}
document.getElementById("ex2").innerHTML = myFunction2(4);


function findMax(){
    let max = -Infinity;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index] > max){ max = arguments[index]}
    }
    return max;
}
document.getElementById("ex3").innerHTML = findMax(4,5,6);


function sumAll(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
    }
    return sum;
}
document.getElementById("ex4").innerHTML = sumAll(1, 123, 500, 115, 44, 88);
