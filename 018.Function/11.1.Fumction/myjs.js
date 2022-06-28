function myFunction(numbre1, numbre2){
    return numbre1*numbre2;
}
document.getElementById("ex1").innerHTML = myFunction(3, 4);


let celsius = toCelsius(77);
document.getElementById("ex2").innerHTML = celsius;
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit -32);
}


function toCelsius3(fahrenheit3){
    return (5/9) * (fahrenheit3 -32);
}
document.getElementById("ex3").innerHTML = toCelsius3;