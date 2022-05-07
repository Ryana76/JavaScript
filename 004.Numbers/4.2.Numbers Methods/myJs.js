let number = 123;
document.getElementById("toString").innerHTML = 
    number.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();

let number2 = 9.656;
document.getElementById("toExponential").innerHTML =
    number2.toExponential() + "<br>" +
    number2.toExponential(2) + "<br>" +
    number2.toExponential(4) + "<br>" +
    number2.toExponential(6);

let number3 = 9.656;
document.getElementById("toFixed").innerHTML = 
    number3.toFixed() + "<br>" +
    number3.toFixed(2) + "<br>" +
    number3.toFixed(4) + "<br>" +
    number3.toFixed(6);

let number4 = 9.656;
document.getElementById("toPrecision").innerHTML = 
    number4.toPrecision() + "<br>" +
    number3.toPrecision(2) + "<br>" +
    number3.toPrecision(4) + "<br>" +
    number3.toPrecision(6);

document.getElementById("Number").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number(10) + "<br>" +
    Number("10") + "<br>" +
    Number("     10") + "<br>" +
    Number("10.33") + "<br>" +
    Number("10,33") + "<br>" +
    Number("10 33") + "<br>" +
    Number("Johnny");

let date = new Date("1970-01-01")
document.getElementById("date").innerHTML = Number(date) 
let date1 = new Date("2022-05-07")
document.getElementById("date1").innerHTML = Number(date1) 

document.getElementById("parseInt").innerHTML =
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +
    parseInt("10 years") + "<br>" +
    parseInt("years 10") + "<br>"
