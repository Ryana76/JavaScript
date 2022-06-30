function myMessage(message){
    document.getElementById("demo").innerHTML = message;
}
function myCalculatur(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculatur(5, 5, myMessage);


setTimeout(myFunction, 3000);
function myFunction(){
    document.getElementById("demo2").innerHTML = "I love you!!!";
}



setTimeout(function(){ myFunction2("I love you!!!");}, 3000);
function myFunction2(value){
    document.getElementById("demo3").innerHTML = value;
}




setInterval(myFunction4, 0);
function myFunction4(){
    let date = new Date();
    document.getElementById("demo4").innerHTML = 
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds();
}